<script>
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<style>
  :global(.font-bold) {
    font-weight: 700;
  }

  :global(.font-semibold) {
    font-weight: 600;
  }

  :global(.font-medium) {
    font-weight: 500;
  }

  :global(.text-gray-500) {
    color: #a0aec0;
  }

  :global(.text-gray-600) {
    color: #718096;
  }

  :global(.text-gray-700) {
    color: #4a5568;
  }

  :global(.text-xs) {
    font-size: 0.75rem;
  }

  :global(.text-sm) {
    font-size: 0.875rem;
  }
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
