import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
    return(
        <div>
      <ExpenseItem 
        title={props.items[0].title}
        atitle={props.items[0].amount}
       date={props.items[0].date} />

      <ExpenseItem 
        title={props.items[0].title}
        atitle={props.items[0].amount}
       date={props.items[0].date}>
      </ExpenseItem>
      <ExpenseItem 
        title={props.items[1].title}
        atitle={props.items[1].amount}
       date={props.items[1].date}>
      </ExpenseItem>
      <ExpenseItem 
        title={props.items[2].title}
        atitle={props.items[2].amount}
       date={props.items[2].date}>
      </ExpenseItem>
      </div>
      );

}

export default Expenses;