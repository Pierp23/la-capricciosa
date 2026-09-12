<template>
  <div class="min-h-screen bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 flex flex-col">
    <!-- NAVBAR -->
    <header class="border-b border-neutral-200 dark:border-neutral-800 sticky top-0 bg-white/80 dark:bg-neutral-900/80 backdrop-blur z-50">
      <div class="max-w-6xl mx-auto px-4 h-16 flex justify-between items-center">
        <NuxtLink to="/" class="text-2xl font-extrabold tracking-tight text-crust-600 flex items-center gap-2">
          <span>🍕 La Capricciosa</span>
        </NuxtLink>
        <div class="flex items-center gap-4">
          <UButton to="/" variant="ghost" color="neutral">Home</UButton>
          <UButton to="/menu" variant="ghost" color="neutral">Menu</UButton>
          <UButton to="/contatti" variant="ghost" color="neutral">Contatti</UButton>
        </div>
      </div>
    </header>

    <!-- MAIN CONTENT -->
    <main class="max-w-6xl mx-auto px-4 flex-grow w-full">
      <NuxtPage />
    </main>

    <!-- FOOTER -->
    <footer class="border-t border-neutral-200 dark:border-neutral-800 py-6 text-center text-sm text-neutral-500">
      <p>© {{ new Date().getFullYear() }} Pizzeria La Capricciosa — Tutti i diritti riservati.</p>
    </footer>
  </div>
</template>