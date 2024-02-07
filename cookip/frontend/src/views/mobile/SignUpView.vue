<template>
    <div style="width: 360px;">
        <PhoneNumberForm />
        <NewLoginForm />
        <EmailForm />
        <BasicForm />
    </div>
</template>

<script setup>

import PhoneNumberForm from "@/components/auth/PhoneNumberForm.vue";
import NewLoginForm from "@/components/auth/NewLoginForm.vue";
import EmailForm from "@/components/auth/EmailForm.vue";
import BasicForm from "@/components/auth/BasicForm.vue";

</script>

<style scoped>

</style>