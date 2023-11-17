<template>
    <Header/>
    <div class="container">
        <Balance />
        <IncomeExpense/>
        <TransactionList />
        <AddTransaction />
    </div>
</template>

<script>
import Header from '../components/ExpenseTracker/Header.vue';
import Balance from '../components/ExpenseTracker/Balance.vue';
import IncomeExpense from '../components/ExpenseTracker/IncomeExpense.vue';
import TransactionList from '../components/ExpenseTracker/TransactionList.vue';
import AddTransaction from '../components/ExpenseTracker/AddTransaction.vue';

export default {
    components: {
        Header,
        Balance,
        IncomeExpense,
        TransactionList,
        AddTransaction
    },
};
</script>