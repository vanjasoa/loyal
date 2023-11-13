<template>
    <div>
        <p>
            {{ user }}
        </p>

        <button @click="logout">logout</button>
        <button @click="onSubmit">login</button>
    </div>
</template>

<script setup>

const { login, logout } = useDirectusAuth();
const user = useDirectusUser();

const onSubmit = async () => {
  try {
    await login({ email: "teddy@mail.com", password: "123456" });
  } catch (e) {}
};

</script>