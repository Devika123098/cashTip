const useBudgetStore = create((set) => ({
	budgets: [],

	addBudget: (budget) => {
		return set((state) => ({
			budgets: [...state.budgets, budget],
		}));
	},

	updateBudget: (budgetId, updatedBudget) => {
		return set((state) => ({
			budgets: state.budgets.map((budget) =>
				budget._id === budgetId ? { ...budget, ...updatedBudget } : budget,
			),
		}));
	},

	deleteBudget: (budgetId) => {
		return set((state) => ({
			budgets: state.budgets.filter((budget) => budget._id !== budgetId),
		}));
	},
}));
