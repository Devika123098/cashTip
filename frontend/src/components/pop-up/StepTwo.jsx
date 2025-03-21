import { Link } from "react-router";
const StepTwo = () => {
	return (
		<>
			<form>
				<h4>who do you spend money on?</h4>
				<div className="options-grid">
					<label>
						<input type="checkbox" name="spendOn" value="myself" />
						Myself
					</label>
					<label>
						<input type="checkbox" name="spendOn" value="myPartner" />
						My partner
					</label>
					<label>
						<input type="checkbox" name="spendOn" value="kids" />
						Kids
					</label>
					<label>
						<input type="checkbox" name="spendOn" value="otherAdults" />
						Other Adults
					</label>
					<label>
						<input type="checkbox" name="spendOn" value="pets" />
						Pets
					</label>
					<label>
						<input type="checkbox" name="spendOn" value="Teens" />
						Teens
					</label>
				</div>
				<Link to="/pop-up/2">back</Link>
				<Link to="/pop-up/3">continue</Link>
			</form>
		</>
	);
};

export default StepTwo;
