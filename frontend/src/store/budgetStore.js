import { create } from 'zustand';

const useBudgetStore = create((set, get) => ({
    totalBalance: 0,
    assigned: {},
    targets: {},

    addToBalance: (amount) => set((state) => ({ 
        totalBalance: state.totalBalance + amount 
    })),

    setTarget: (category, index, amount) => set((state) => ({
        targets: {
            ...state.targets,
            [category]: {
                ...(state.targets[category] || {}),
                [index]: amount
            }
        }
    })),

    setAssigned: (category, index, amount) => set((state) => {
        const currentAssigned = state.assigned[category]?.[index] || 0;
        const difference = amount - currentAssigned;
        
        return {
            assigned: {
                ...state.assigned,
                [category]: {
                    ...(state.assigned[category] || {}),
                    [index]: amount
                }
            },
            totalBalance: state.totalBalance - difference
        };
    }),

    getAvailable: (category, index) => {
        const state = get();
        const assigned = state.assigned[category]?.[index] || 0;
        const target = state.targets[category]?.[index] || 0;
        return assigned - target;
    },

    resetAssignments: () => set((state) => {
        const totalAssigned = Object.values(state.assigned).reduce((sum, category) => {
            return sum + Object.values(category).reduce((catSum, amount) => catSum + amount, 0);
        }, 0);

        return {
            assigned: {},
            totalBalance: state.totalBalance + totalAssigned
        };
    }),

    autoAssign: () => set((state) => {
        const newAssigned = { ...state.assigned };
        let totalAssigned = 0;

        // Distribution percentages
        const distribution = {
            bills: 0.5,  // 50%
            needs: 0.3,  // 30%
            wants: 0.2   // 20%
        };

        // For each category, assign target amounts regardless of balance
        Object.entries(distribution).forEach(([category, percentage]) => {
            const targets = state.targets[category] || {};

            Object.entries(targets).forEach(([index, target]) => {
                const currentAssigned = state.assigned[category]?.[index] || 0;
                
                // Assign the full target amount
                if (target > currentAssigned) {
                    newAssigned[category] = {
                        ...(newAssigned[category] || {}),
                        [index]: target
                    };
                    totalAssigned += target - currentAssigned;
                }
            });
        });

        // Calculate new total balance after assignments
        const newBalance = state.totalBalance - totalAssigned;

        return {
            assigned: newAssigned,
            totalBalance: newBalance // This can now be negative
        };
    })
}));

export default useBudgetStore; 