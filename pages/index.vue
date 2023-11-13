<template>
    <div>
        <p>
            {{ user }}
        </p>
        <h1>{{ token }}</h1>

        <button @click="logout">logout</button>
        <button @click="onSubmit">login</button>

        <div>
            <h1>Counter: {{ counter || '-' }}</h1>
            <button @click="counter = null">reset</button>
            <button @click="counter--">-</button>
            <button @click="counter++">+</button>
        </div>
    </div>
</template>

<script setup>

const { login, logout } = useDirectusAuth();
const user = useDirectusUser();
const { token } = useDirectusToken();
const counter = useCookie('counter')
const t = useCookie('refesh_token')

counter.value = counter.value || Math.round(Math.random() * 1000)

const onSubmit = async () => {
    try {
        await login({ email: "teddy@mail.com", password: "123456" });
        document.cookie = "Token=" + token.value + ";" + expires + ";path=/";
        t.value = token.value
        console.log(token.value);
    } catch (e) { }
};

</script>