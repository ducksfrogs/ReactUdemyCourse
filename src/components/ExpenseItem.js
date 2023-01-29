import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
//    const expenseDate = new Date(2021, 2, 28);
//  const expenseTitle = 'Car Insurance';
//  const expenseAmount = 294.67;

    return (
        <div className='ExItem'>
            <ExpenseDate date={props.date} />
            <div>
                <h2>{props.title}</h2>
                <div>{props.amount}</div>
            </div>
        </div>
        );
    }

    export default ExpenseItem;