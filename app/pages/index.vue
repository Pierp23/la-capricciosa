<script setup>
useSeoMeta({
  title: 'Pizzeria La Capricciosa di Nanu Franco Rino - Nuoro',
  description: 'Pizzeria al taglio e d\'asporto a Nuoro in Via La Marmora. Pizze in teglia, focacce e ingredienti freschi preparati ogni giorno.'
})

const puntiForza = [
  {
    icon: 'i-heroicons-sparkles',
    title: 'Pizza in Teglia Artigianale',
    description: 'Preparata ogni giorno nel nostro laboratorio per garantire la giusta croccantezza e un impasto leggero e digeribile.'
  },
  {
    icon: 'i-heroicons-heart',
    title: 'Prodotti Freschi e di Qualità',
    description: 'Selezioniamo solo ingredienti genuini e prepariamo le nostre verdure ogni mattina per farciture ricche e saporite.'
  },
  {
    icon: 'i-heroicons-shopping-bag',
    title: 'Tranci al Volo e Teglie d\'Asporto',
    description: 'La soluzione perfetta per una pausa gustosa in centro a Nuoro o da portare a casa appena sfornata.'
  }
]
</script>

<template>
  <div class="space-y-12 pb-12">
    
    <!-- 1. HERO BANNER: FOTO PRINCIPALE A SCHERMO AMPIO -->
    <section class="relative rounded-2xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-900 group my-4">
      <!-- Immagine di sfondo/banner -->
      <img 
        src="/images/pizzeria-1.jpg" 
        alt="La Capricciosa Pizzeria di Nanu Franco Rino" 
        class="w-full h-140 object-cover object-top "
      />
      <!-- Sfumatura per migliorare la leggibilità del badge -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      
      <!-- Badge in sovrapposizione in basso all'immagine -->
      <div class="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
        <UBadge color="primary" variant="outline" size="lg" class="text-white shadow-lg"
>
          📍 Nuoro · Via la Marmora, 134
        </UBadge>
      </div>
    </section>

    <!-- 2. SEZIONE SCRITTA E CALL TO ACTION (SUBITO SOTTO) -->
    <section class="bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200/80 dark:border-neutral-700/50 rounded-2xl p-8 md:p-12 text-center space-y-6">
      <div class="max-w-3xl mx-auto space-y-4">
        <UBadge color="primary" variant="subtle" size="md">Pizzeria al Taglio & d'Asporto</UBadge>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
          Pizzeria La Capricciosa
        </h1>
        <p class="text-xl font-medium text-crust-600 dark:text-crust-400">
          di Nanu Franco Rino
        </p>
        <p class="text-neutral-600 dark:text-neutral-300 text-base md:text-lg leading-relaxed pt-2">
          La storica pizza in teglia e al taglio nel cuore di Nuoro. Croccantezza, passione e ingredienti di prima qualità selezionati e preparati a mano ogni giorno.
        </p>
      </div>

      <!-- Pulsanti d'azione principali -->
      <div class="flex flex-wrap justify-center gap-4 pt-2">
        <UButton to="/menu" color="primary" size="xl" icon="i-heroicons-book-open">
          Sfoglia il Menu
        </UButton>
        <UButton to="tel:+393299872735" color="neutral" variant="outline" size="xl" icon="i-heroicons-phone">
          Chiama e Ordina (+39 329 987 2735)
        </UButton>
      </div>
    </section>

    <!-- 3. SEZIONE ARTIGIANALITÀ (CON FOTO DEL PIZZAIOLO FRANCO RINO) -->
    <section class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pt-4">
      <div class="space-y-4">
        <UBadge color="neutral" variant="subtle">Tradizione Nuorese</UBadge>
        <h2 class="text-3xl font-extrabold tracking-tight">
          La passione per la vera pizza in teglia
        </h2>
        <p class="text-neutral-600 dark:text-neutral-300 leading-relaxed">
        L'arte della pizza in teglia ha il volto e le mani di Franco Rino Nanu. Ingredienti freschissimi preparati ogni giorno, condimenti abbondanti e un impasto leggero steso con cura artigianale.  
        </p>
        <p class="text-neutral-600 dark:text-neutral-300 leading-relaxed">
          Che sia per una pausa veloce o per una teglia da condividere a casa, da <strong class="text-primary-600">La Capricciosa</strong> trovi sempre il profumo e la bontà della pizza appena sfornata.
        </p>
      </div>

      <!-- Foto della lavorazione dell'impasto e preparazione -->
      <div class="grid grid-cols-2 gap-4">
        <div class="space-y-2">
          <img 
            src="/images/pizzeria-2.jpg" 
            alt="Stesura dell'impasto a mano" 
            class="rounded-xl shadow-md aspect-[3/4] object-cover w-full border border-neutral-200 dark:border-neutral-800"
          />
          <p class="text-xs text-center text-neutral-500">Stesura dell'impasto a mano</p>
        </div>
        <div class="space-y-2">
          <img 
            src="/images/pizzeria-3.jpg" 
            alt="Condimento pizze con verdure fresche" 
            class="rounded-xl shadow-md aspect-[3/4] object-cover w-full border border-neutral-200 dark:border-neutral-800"
          />
          <p class="text-xs text-center text-neutral-500">Condimenti freschi in teglia</p>
        </div>
      </div>
    </section>

    <!-- 4. PUNTI DI FORZA -->
    <section class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
      <UCard v-for="(item, index) in puntiForza" :key="index" class="text-center hover:shadow-lg transition">
        <template #header>
          <div class="flex justify-center">
            <UIcon :name="item.icon" class="w-10 h-10 text-crust-600" />
          </div>
        </template>
        <h3 class="text-xl font-bold mb-2">{{ item.title }}</h3>
        <p class="text-neutral-600 dark:text-neutral-400 text-sm">
          {{ item.description }}
        </p>
      </UCard>
    </section>

    <!-- 5. INFO LOCALE E SOCIAL -->
    <section class="bg-neutral-100 dark:bg-neutral-800 rounded-2xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div class="space-y-4">
        <h2 class="text-3xl font-bold">Dove trovarci a Nuoro?</h2>
        <p class="text-neutral-600 dark:text-neutral-300">
          Passa a trovarci per un trancio al volo o chiama per ordinare la tua teglia d'asporto.
        </p>
        
        <div class="space-y-3 pt-2">
          <div class="flex items-center gap-3">
            <UIcon name="i-heroicons-map-pin" class="w-5 h-5 text-crust-600 flex-shrink-0" />
            <span>Via La Marmora 134 - Nuoro (NU) 08100</span>
          </div>
          <div class="flex items-center gap-3">
            <UIcon name="i-heroicons-phone" class="w-5 h-5 text-crust-600 flex-shrink-0" />
            <a href="tel:+393299872735" class="hover:underline font-semibold">+39 329 987 2735</a>
          </div>
          <div class="space-y-3 pt-2">
            <div class="flex items-start gap-3">
              <UIcon name="i-heroicons-clock" class="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <div class="text-sm space-y-1">
                <p class="font-semibold text-base text-neutral-900 dark:text-neutral-100 mb-1">
                  Orari di Apertura:
                </p>
                <div class="grid grid-cols-2 gap-x-4 gap-y-0.5 text-neutral-600 dark:text-neutral-300">
                  <span>Lunedì:</span>
                  <span class="font-medium">19:15 – 22:15</span>

                  <span>Martedì:</span>
                  <span class="font-medium">19:15 – 22:15</span>

                  <span>Mercoledì:</span>
                  <span class="font-medium">19:15 – 22:15</span>

                  <span class="text-error font-medium">Giovedì:</span>
                  <span class="text-error font-medium">Chiuso</span>

                  <span class="text-error font-medium">Venerdì:</span>
                  <span class="text-error font-medium">Chiuso</span>

                  <span>Sabato:</span>
                  <span class="font-medium">19:15 – 22:00</span>

                  <span>Domenica:</span>
                  <span class="font-medium">19:15 – 22:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-center gap-4">
        <UCard class="w-full text-center space-y-4">
          <h3 class="text-lg font-bold">I Nostri Canali</h3>
          <p class="text-sm text-neutral-500">Leggi le recensioni o resta aggiornato sulle teglie del giorno.</p>
          <div class="flex justify-center gap-3 pt-2">
            <UButton 
              to="https://www.facebook.com/la.capricciosa.56/?locale=it_IT" 
              target="_blank" 
              color="neutral" 
              variant="outline"
              icon="i-heroicons-link"
            >
              Facebook
            </UButton>
            <UButton 
              to="https://www.tripadvisor.it/Restaurant_Review-g187882-d7086427-Reviews-La_Capricciosa-Nuoro_Province_of_Nuoro_Sardinia.html" 
              target="_blank" 
              color="neutral" 
              variant="outline"
              icon="i-heroicons-star"
            >
              TripAdvisor
            </UButton>
          </div>
        </UCard>
      </div>
    </section>

  </div>
</template>