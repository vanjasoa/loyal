<template>
    <div>
        <p>
            {{ user }}
        </p>
        <h1>{{ token }}</h1>

        <button @click="logout">logout</button>
        <button @click="onSubmit">login</button>
    </div>
</template>

<script setup>

const { login, logout } = useDirectusAuth();
const user = useDirectusUser();
const { token } = useDirectusToken();

const onSubmit = async () => {
  try {
    await login({ email: "teddy@mail.com", password: "123456" });
    document.cookie ="Token=" + token.value + ";" + expires + ";path=/";
    console.log(token.value);
  } catch (e) {}
};

</script>