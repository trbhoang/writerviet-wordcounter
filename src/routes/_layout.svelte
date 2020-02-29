<script>
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<style>

</style>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
</svelte:head>

<Nav />

<main>
  <slot />
</main>

<Footer />
