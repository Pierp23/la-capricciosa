<script setup>
useSeoMeta({
  title: 'Pizzeria La Capricciosa di Franco Rino Nanu - Nuoro',
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
    title: 'Tranci e Teglie d\'Asporto',
    description: 'La soluzione perfetta per una pausa gustosa in centro a Nuoro o da portare a casa appena sfornata.'
  }
]
</script>

<template>
  <div class="space-y-8 sm:space-y-12 pb-12">
    
    <!-- 1. HERO BANNER: VISIBILE SOLO DA TABLET/DESKTOP IN SU (MD+) -->
    <section class=" relative rounded-2xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-900 group my-4">
      <img 
        src="/images/pizzeria-1.jpg" 
        alt="La Capricciosa Pizzeria di Franco Rino Nanu" 
        class="w-full h-40 md:h-80 lg:h-[480px] object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      
      <div class="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
        <UBadge color="primary" variant="outline" size="lg" class="text-white shadow-lg backdrop-blur-md bg-black/30">
          <a 
              href="https://maps.app.goo.gl/qd28DXarjmVp6F68A" 
              target="_blank" 
              rel="noopener noreferrer">
               📍 Nuoro · Via Nicolò Ferracciu, 26
            </a>
        </UBadge>
      </div>
    </section>

    <!-- 2. SEZIONE SCRITTA E CALL TO ACTION -->
    <section class="bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200/80 dark:border-neutral-700/50 rounded-2xl p-5 sm:p-8 md:p-12 text-center space-y-6">
      <div class="max-w-3xl mx-auto space-y-3 sm:space-y-4">
        <UBadge color="primary" variant="subtle" size="md">Pizzeria al Taglio & d'Asporto</UBadge>
        <h1 class="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
          Pizzeria La Capricciosa
        </h1>
        <p class="text-lg sm:text-xl font-medium text-primary-600 dark:text-primary-600">
          di Franco Rino Nanu
        </p>
        <p class="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base md:text-lg leading-relaxed pt-1 sm:pt-2">
          La storica pizza in teglia e al taglio nel cuore di Nuoro. <br> Croccantezza, passione e ingredienti di prima qualità selezionati e preparati a mano ogni giorno.
        </p>
      </div>

      <!-- Pulsanti responsive: Full width su smartphone, affiancati su tablet/PC -->
      <div class="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 pt-2">
        <UButton 
          to="/menu" 
          color="primary" 
          size="xl" 
          icon="i-heroicons-book-open"
          class="w-max justify-center dark:!text-white"
        >
          Sfoglia il Menu
        </UButton>
        <UButton 
          to="tel:+393299872735" 
          color="primary" 
          variant="outline" 
          size="xl" 
          icon="i-heroicons-phone"
          class="w-max justify-center dark:!text-white"
        >
          Chiama e Ordina
        </UButton>
      </div>
    </section>

    <!-- 3. SEZIONE ARTIGIANALITÀ (FRANCO RINO NANU) -->
    <section class="grid grid-cols-1 gap-8 items-center pt-2 sm:pt-4">
      <div class="space-y-4 text-left">
        <UBadge color="neutral" variant="subtle">Tradizione Nuorese</UBadge>
        <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight">
          La passione per la vera pizza in teglia
        </h2>
        <p class="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
          L'arte della pizza in teglia ha il volto e le mani di Franco Rino Nanu. <br> Ingredienti freschissimi preparati ogni giorno, condimenti abbondanti e un impasto leggero steso con cura artigianale.  
        </p>
        <p class="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
          Che sia per una pausa veloce o per una teglia da condividere a casa, da <strong class="text-primary-600 dark:text-primary-600">La Capricciosa</strong> trovi sempre il profumo e la bontà della pizza appena sfornata.
        </p>
      </div>

      <!-- Foto affiancate della lavorazione -->
      <div class="grid md:grid-cols-2 gap-3 sm:gap-4">
        <div class="space-y-2">
          <img 
            src="/images/pizzeria-2.jpg" 
            alt="Stesura dell'impasto a mano" 
            class="rounded-xl shadow-md aspect-[3/4] object-cover w-full border border-neutral-200 dark:border-neutral-800"
          />
          <p class="text-xs text-center text-neutral-500">Stesura dell'impasto</p>
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
    <section class="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 pt-2 sm:pt-4">
      <UCard v-for="(item, index) in puntiForza" :key="index" class="text-center hover:shadow-lg transition">
        <template #header>
          <div class="flex justify-center">
            <UIcon :name="item.icon" class="w-8 h-8 sm:w-10 sm:h-10 text-primary-600 dark:text-primary-600" />
          </div>
        </template>
        <h3 class="text-lg sm:text-xl font-bold mb-2">{{ item.title }}</h3>
        <p class="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm">
          {{ item.description }}
        </p>
      </UCard>
    </section>

    <!-- 5. INFO LOCALE ED ORARI -->
    <section class="bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 rounded-2xl p-5 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start md:items-center">
      <div class="space-y-4">
        <h2 class="text-2xl sm:text-3xl font-bold">Dove trovarci a Nuoro?</h2>
        <p class="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base">
          Passa a trovarci per un trancio al volo o chiama per ordinare la tua teglia d'asporto.
        </p>
        
        <div class="space-y-4 pt-2">
          <div class="flex items-center gap-3 text-sm sm:text-base">
            <UIcon name="i-heroicons-map-pin" class="w-5 h-5 text-primary-600 dark:text-primary-600 flex-shrink-0" />
            <a 
              href="https://maps.app.goo.gl/qd28DXarjmVp6F68A" 
              target="_blank" 
              rel="noopener noreferrer">
                Via Nicolò Ferracciu, 26 - Nuoro (NU) - 08100
            </a>
          </div>
          <div class="flex items-center gap-3 text-sm sm:text-base">
            <UIcon name="i-heroicons-phone" class="w-5 h-5 text-primary-600 dark:text-primary-600 flex-shrink-0" />
            <a href="tel:+393299872735" class="hover:underline font-semibold">+39 329 987 2735</a>
          </div>
          
          <div class="flex items-start gap-3 pt-2">
            <UIcon name="i-heroicons-clock" class="w-5 h-5 text-primary flex-shrink-0 mt-1" />
            <div class="text-sm space-y-1 w-full">
              <p class="font-semibold text-base text-neutral-900 dark:text-neutral-100 mb-2">
                Orari di Apertura:
              </p>
              <div class="grid grid-cols-2 gap-x-4 gap-y-1 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
                <span>Lunedì:</span>
                <span class="font-medium">19:15 – 22:15</span>

                <span>Martedì:</span>
                <span class="font-medium">19:15 – 22:15</span>

                <span>Mercoledì:</span>
                <span class="font-medium">19:15 – 22:15</span>

                <span class="text-red-700 dark:text-red-400 font-medium">Giovedì:</span>
                <span class="text-red-700 dark:text-red-400 font-medium">Chiuso</span>

                <span class="text-red-700 dark:text-red-400 font-medium">Venerdì:</span>
                <span class="text-red-700 dark:text-red-400 font-medium">Chiuso</span>

                <span>Sabato:</span>
                <span class="font-medium">19:15 – 22:00</span>

                <span>Domenica:</span>
                <span class="font-medium">19:15 – 22:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- SOCIAL E RECENSIONI -->
      <div class="flex flex-col items-center gap-4 w-full">
        <UCard class="w-full text-center space-y-4">
          <h3 class="text-base sm:text-lg font-bold">I Nostri Canali</h3>
          <p class="text-xs sm:text-sm text-neutral-500">Leggi le recensioni o resta aggiornato sulle teglie del giorno.</p>
          <div class="flex flex-col sm:flex-row justify-center gap-3 pt-2">
            <UButton 
              to="https://www.facebook.com/la.capricciosa.56/?locale=it_IT" 
              target="_blank" 
              color="neutral" 
              variant="outline"
              icon="i-heroicons-link"
              class="w-full sm:w-auto justify-center"
            >
              Facebook
            </UButton>
            <UButton 
              to="https://www.tripadvisor.it/Restaurant_Review-g187882-d7086427-Reviews-La_Capricciosa-Nuoro_Province_of_Nuoro_Sardinia.html" 
              target="_blank" 
              color="neutral" 
              variant="outline"
              icon="i-heroicons-star"
              class="w-full sm:w-auto justify-center"
            >
              TripAdvisor
            </UButton>
          </div>
        </UCard>
      </div>
    </section>

  </div>
</template>