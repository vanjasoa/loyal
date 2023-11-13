<template>
    <div>
        <p>
            {{ items }}
        </p>

        <button @click="fetchArticles">Refresh</button>
    </div>
</template>

<script setup>

const { getItems } = useDirectusItems();

const fetchArticles = async () => {
  try {
    const items = await getItems({
      collection: "product",
    });
  } catch (e) {}
};

</script>