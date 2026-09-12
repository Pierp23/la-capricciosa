<script setup>
useSeoMeta({
  title: 'Contatti - Pizzeria La Capricciosa Nuoro',
  description: 'Contatta La Capricciosa di Franco Rino Nanu a Nuoro. Telefono per ordini da asporto e pagina Facebook ufficiale.'
})

const orari = [
  { giorno: 'Lunedì', orario: '19:15 – 22:15', chiuso: false },
  { giorno: 'Martedì', orario: '19:15 – 22:15', chiuso: false },
  { giorno: 'Mercoledì', orario: '19:15 – 22:15', chiuso: false },
  { giorno: 'Giovedì', orario: 'Chiuso', chiuso: true },
  { giorno: 'Venerdì', orario: 'Chiuso', chiuso: true },
  { giorno: 'Sabato', orario: '19:15 – 22:00', chiuso: false },
  { giorno: 'Domenica', orario: '19:15 – 22:00', chiuso: false }
]
</script>

<template>
  <div class="max-w-4xl mx-auto py-8 space-y-10">
    
    <!-- TITOLO -->
    <div class="text-center space-y-2">
      <UBadge color="primary" variant="subtle" size="lg">
        <a 
            href="https://maps.app.goo.gl/qd28DXarjmVp6F68A" 
            target="_blank" 
            rel="noopener noreferrer"
            >
                Nuoro · Via Nicolò Ferracciu, 26
        </a>
    </UBadge>
      <h1 class="text-4xl font-extrabold tracking-tight">Contatti</h1>
      <p class="text-neutral-600 dark:text-neutral-400">
        Pizzeria al taglio e d'asporto di Franco Rino Nanu
      </p>
    </div>

    <!-- SCHEDE PRINCIPALI: TELEFONO & FACEBOOK -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
      
      <!-- ORDINI TELEFONICI -->
      <UCard class="text-center p-4 hover:shadow-lg transition">
        <div class="flex flex-col items-center space-y-4">
          <div class="p-4 bg-primary-50 dark:bg-primary-950/40 rounded-full">
            <UIcon name="i-heroicons-phone" class="w-10 h-10 text-primary" />
          </div>
          <h2 class="text-2xl font-bold">Chiamaci</h2>
          <p class="text-sm text-neutral-500">
            Chiama per prenotare le tue teglie calde o i tuoi tranci preferiti.
          </p>
          <UButton 
            to="tel:+393299872735" 
            color="primary" 
            size="xl" 
            icon="i-heroicons-phone"
            class="w-full justify-center text-lg font-bold"
          >
            +39 329 987 2735
          </UButton>
        </div>
      </UCard>

      <!-- PAGINA FACEBOOK -->
      <UCard class="text-center p-4 hover:shadow-lg transition">
        <div class="flex flex-col items-center space-y-4">
          <div class="p-4 bg-blue-50 dark:bg-blue-950/40 rounded-full">
            <UIcon name="i-heroicons-link" class="w-10 h-10 text-blue-600" />
          </div>
          <h2 class="text-2xl font-bold">Seguici su Facebook</h2>
          <p class="text-sm text-neutral-500">
            Resta aggiornato sulle specialità del giorno e le ultime novità.
          </p>
          <UButton 
            to="https://www.facebook.com/la.capricciosa.56/?locale=it_IT" 
            target="_blank" 
            color="neutral" 
            variant="outline" 
            size="xl" 
            icon="i-heroicons-arrow-top-right-on-square"
            class="w-full justify-center text-lg"
          >
            Pagina Facebook
          </UButton>
        </div>
      </UCard>

    </div>

    <!-- SEZIONE ORARI E INDIRIZZO -->
    <UCard class="bg-neutral-50 dark:bg-neutral-800/50">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <!-- INDIRIZZO -->
        <div>
          <h4 class="text-xl font-bold flex items-center gap-2">
            <UIcon name="i-heroicons-map-pin" class="w-6 h-6 text-primary" />
            Dove Siamo
          </h4>
          <p class="pt-5">
            <a 
                href="https://maps.app.goo.gl/qd28DXarjmVp6F68A" 
                target="_blank" 
                rel="noopener noreferrer"
                class="text-md font-medium text-neutral-900 dark:text-neutral-100 hover:text-primary-600 dark:hover:text-primary-400 block"
                >
                    Via Nicolò Ferracciu, 26 
                    <br/>
                    Nuoro (NU) - 08100
            </a>
          </p>
           
          <p class="text-sm text-neutral-500 pt-3">
            Ci trovi nel cuore di Nuoro, pronti ad accoglierti per una pausa gustosa o per una teglia d'asporto.
          </p>
        </div>

        <!-- TABELLA ORARI -->
        <div class="space-y-3">
          <h3 class="text-xl font-bold flex items-center gap-2">
            <UIcon name="i-heroicons-clock" class="w-6 h-6 text-primary" />
            Orari di Apertura
          </h3>
          <div class="space-y-1.5 text-sm">
            <div 
              v-for="item in orari" 
              :key="item.giorno" 
              class="flex justify-between py-1 border-b border-neutral-200 dark:border-neutral-700 last:border-0"
            >
              <span class="font-medium" :class="{ 'text-error': item.chiuso }">
                {{ item.giorno }}
              </span>
              <span :class="item.chiuso ? 'text-error font-semibold' : 'text-neutral-600 dark:text-neutral-300'">
                {{ item.orario }}
              </span>
            </div>
          </div>
        </div>

      </div>
    </UCard>

  </div>
</template>