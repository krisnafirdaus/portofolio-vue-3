<template>
    <Header />
    <div class="container">
        <Balance :total="+total" />
        <IncomeExpense :income="+income" :expenses="+expenses"/>
        <TransactionList :transactions="transactions" @deleteTransaction="handleTransactionDelete" />
        <AddTransaction @addTransaction="handleTransactionSubmitted" />
    </div>
</template>

<script setup>
import Header from '../components/ExpenseTracker/Header.vue';
import Balance from '../components/ExpenseTracker/Balance.vue';
import IncomeExpense from '../components/ExpenseTracker/IncomeExpense.vue';
import TransactionList from '../components/ExpenseTracker/TransactionList.vue';
import AddTransaction from '../components/ExpenseTracker/AddTransaction.vue';

import { ref, computed, onMounted } from 'vue';
import {useToast} from 'vue-toastification';

const toast = useToast();

const transactions = ref([
])

onMounted(() => {
    const savedTransaction = JSON.parse(localStorage.getItem('transactions'));

    if(savedTransaction){
        transactions.value = savedTransaction;
    }
})

// get Total
const total = computed(() => {
    return transactions.value.reduce((acc, transaction) => acc += transaction.amount, 0);
});

// get income
const income = computed(() => {
    return transactions.value.filter(transaction => transaction.amount > 0)
        .reduce((acc, transaction) => acc += transaction.amount, 0);
});

// get expenses
const expenses = computed(() => {
    return transactions.value.filter(transaction => transaction.amount < 0)
        .reduce((acc, transaction) => acc += transaction.amount, 0);
});

// add transaction
const handleTransactionSubmitted = (transaction) => {
    transactions.value.push({
        id: generateUniqueId(),
        text: transaction.text,
        amount: transaction.amount
    });

    saveToLocalStorage();   

    toast.success('Transaction added successfully');
}

// generate unique id
const generateUniqueId = () => {
    return Math.floor(Math.random() * 100000000);
}

// delete transaction
const handleTransactionDelete = (id) => {
    transactions.value = transactions.value.filter(transaction => transaction.id !== id);

    saveToLocalStorage();   

    toast.success('Transaction deleted successfully');
}

// save to local storage
const saveToLocalStorage = () => {
    localStorage.setItem('transactions', JSON.stringify(transactions.value));
}

</script>