<script setup>
const isMenuOpen = ref(false)

// Chiude il drawer quando si cambia pagina
const route = useRoute()
watch(() => route.fullPath, () => {
  isMenuOpen.value = false
})

const links = [
  { label: 'Home', to: '/', icon: 'i-heroicons-home' },
  { label: 'Le Pizze', to: '/menu', icon: 'i-heroicons-book-open' },
  { label: 'Contatti', to: '/contatti', icon: 'i-heroicons-phone' }
]
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 flex flex-col">
    <!-- NAVBAR -->
    <header class="border-b border-neutral-200 dark:border-neutral-800 sticky top-0 bg-white/80 dark:bg-neutral-900/80 backdrop-blur z-50">
      <div class="max-w-6xl mx-auto px-4 h-16 flex justify-between items-center">
        <!-- LOGO -->
        <NuxtLink to="/" class="text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight text-primary-600 dark:text-primary-600 flex items-center gap-1.5 whitespace-nowrap">
          <span>🍕 La Capricciosa</span>
        </NuxtLink>
        
        <!-- MENU DESKTOP (visibile solo da sm/md in su) -->
        <nav class="hidden sm:flex items-center gap-2">
          <UButton 
            v-for="link in links" 
            :key="link.to" 
            :to="link.to" 
            variant="ghost" 
            color="neutral" 
            size="md"
          >
            {{ link.label }}
          </UButton>
        </nav>

        <!-- TASTO HAMBURGER MOBILE (visibile solo su schermi piccoli) -->
        <div class="sm:hidden flex items-center">
          <UButton 
            color="neutral" 
            variant="ghost" 
            icon="i-heroicons-bars-3" 
            size="lg"
            aria-label="Apri menu" 
            @click="isMenuOpen = true" 
          />
        </div>
      </div>
    </header>

    <!-- DRAWER / MENU LATERALE MOBILE -->
    <USlideover v-model:open="isMenuOpen" title="Menu di Navigazione">
      <template #content>
        <div class="p-6 space-y-6 flex flex-col justify-between h-full">
          <!-- Intestazione Drawer -->
          <div class="space-y-6">
            <div class="flex items-center justify-between pb-4 border-b border-neutral-200 dark:border-neutral-800">
              <span class="text-xl font-bold text-primary-600 dark:text-primary-600">🍕 La Capricciosa</span>
              <UButton 
                color="neutral" 
                variant="ghost" 
                icon="i-heroicons-x-mark" 
                @click="isMenuOpen = false" 
              />
            </div>

            <!-- Lista Link Mobile -->
            <nav class="flex flex-col gap-3">
              <UButton 
                v-for="link in links" 
                :key="link.to" 
                :to="link.to" 
                :icon="link.icon"
                variant="subtle" 
                color="neutral" 
                size="xl" 
                class="justify-start w-full text-lg py-3"
              >
                {{ link.label }}
              </UButton>
            </nav>
          </div>

          <!-- Footer del Menu Mobile -->
          <div class="pt-6 border-t border-neutral-200 dark:border-neutral-800 text-center space-y-3">
            <p class="text-xs text-neutral-500">
              <a 
                href="https://maps.app.goo.gl/qd28DXarjmVp6F68A" 
                target="_blank" 
                rel="noopener noreferrer">
                  Via Nicolò Ferracciu, 26 - Nuoro (NU) - 08100
              </a>
            </p>
            <UButton 
              to="tel:+393299872735" 
              color="primary" 
              icon="i-heroicons-phone" 
              class="w-full justify-center"
            >
              Chiamaci
            </UButton>
          </div>
        </div>
      </template>
    </USlideover>

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