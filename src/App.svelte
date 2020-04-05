<script>
  // import Github from './Github.svelte'
  import GithubAwait from './GithubAwait.svelte'
  import { setContext, onMount, afterUpdate } from 'svelte'
  // components
  import Navbar from './Navbar.svelte'
  import ExpensesList from './ExpensesList.svelte'
		import Totals from './Totals.svelte'
  import ExpenseForm from './ExpenseForm.svelte'
  import Modal from './Modal.svelte'
		
  // data
  // import expensesData from './expenses'

  // variables
		let expenses = []
    // set editing variables
    let setName = ''
    let setAmount = null
    let setId = null
    // toggle form variable
    let isFormOpen = false
    // reactive 
    $: isEditing = setId?true:false
		$: total = expenses.reduce((acc, curr)=>{
			// console.log({acc, amount: curr.amount})
			return(acc += curr.amount) // reduce always return accumulator
		},0) // $: total  correponde a let total no svelte
  // functions
  function showForm() {
    isFormOpen = true
  }
  function hideForm() {
    isFormOpen = false
    setName = ''
    setAmount = null
    setId = null
  }
  function removeExpense(id) {
    expenses = expenses.filter(item => item.id !== id) //we dont want that item id
    // setLocalStorage()
  }
  function clearExpenses() {
    expenses = []
    // setLocalStorage()
  }
  function addExpense({name, amount}) {
    //console.log(name, amount)
    let expense = {id: Math.random()*Date.now(), name, amount}
    expenses = [expense, ...expenses]// add a new on to copied expenses
    // setLocalStorage()
  }
  function setModifiedExpense(id) {
    let expense = expenses.find(item => item.id === id)
    // console.log(expense)
    setId = expense.id
    setName = expense.name
    setAmount = expense.amount
    // console.log({setId, setName, setAmount})
    showForm()
  }
  function editExpense({name, amount}) {
    expenses = expenses.map(item => {
      return item.id === setId? {...item, name, amount} : {...item}
    })
    setId = null
    setAmount = null
    setName = ''
    // setLocalStorage()
  }
  // context
  setContext('remove', removeExpense)
  setContext('modify', setModifiedExpense)
  // localstorage
  function setLocalStorage() {
    localStorage.setItem('expenses', JSON.stringify(expenses))
  }
  onMount(() => {// onMount: life cycle
    expenses = localStorage.getItem('expenses')? 
    JSON.parse(localStorage.getItem('expenses'))
    : []
  })
  afterUpdate(() => {
    console.log('after update')
    setLocalStorage() 
  })
</script>

<!-- <style></style> -->

<Navbar {showForm} />

<main class="content">
  <!-- <GithubAwait /> -->
  <!-- <Github /> -->
  <!-- {isEditing} -->
  {#if isFormOpen} 
    <Modal>
      <ExpenseForm 
        {addExpense} 
        name={setName} 
        amount={setAmount} 
        {isEditing} 
        {editExpense} 
        {hideForm}
      />
    </Modal>
  {/if}
	<Totals title = "total expenses" {total} />
  <ExpensesList {expenses} />
  <button class="btn btn-primary btn-block" on:click={clearExpenses}>
    clear expenses
  </button>
</main>

