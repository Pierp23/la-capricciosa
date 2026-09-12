<script setup>
useSeoMeta({
  title: 'Menu Pizze - Pizzeria La Capricciosa',
  description: 'Sfoglia il nostro menu con pizze rosse, bianche e specialità preparate con ingredienti freschi.'
})

// Tab per la navigazione del menu
const categories = [
  { label: 'Pizze Rosse', icon: 'i-heroicons-fire', key: 'rosse' },
  { label: 'Pizze Bianche', icon: 'i-heroicons-sparkles', key: 'bianche' },
  { label: 'Specialità', icon: 'i-heroicons-star', key: 'speciali' }
]

// Lista dei prodotti divisa per categoria
const menu = {
  rosse: [
    { name: 'Margherita', ingredients: 'Pomodoro San Marzano, mozzarella fior di latte, basilico fresco, olio EVO', price: '6.50', vegetariana: true, piccante: false },
    { name: 'Diavola', ingredients: 'Pomodoro, mozzarella, salame piccante calabrese, olio piccante', price: '8.00', vegetariana: false, piccante: true },
    { name: 'Capricciosa', ingredients: 'Pomodoro, mozzarella, prosciutto cotto, funghi, carciofi, olive nere', price: '9.00', vegetariana: false, piccante: false },
    { name: 'Marinara', ingredients: 'Pomodoro, aglio, origano, olio EVO', price: '5.50', vegetariana: true, piccante: false }
  ],
  bianche: [
    { name: '4 Formaggi', ingredients: 'Mozzarella, gorgonzola DOP, fontina, parmigiano reggiano', price: '9.00', vegetariana: true, piccante: false },
    { name: 'Salsiccia e Friarielli', ingredients: 'Mozzarella, salsiccia fresca, friarielli ripassati in padella', price: '9.50', vegetariana: false, piccante: false },
    { name: 'Primavera', ingredients: 'Mozzarella, pomodorini pachino, rucola, scaglie di grana', price: '8.50', vegetariana: true, piccante: false }
  ],
  speciali: [
    { name: 'La Capricciosa 2.0', ingredients: 'Cornicione ripieno di ricotta, pomodoro giallo, mozzarella di bufala, crudo di Parma 24 mesi', price: '12.00', vegetariana: false, piccante: false },
    { name: 'Tartufata', ingredients: 'Crema di tartufo nero, mozzarella, funghi porcini, salsiccia, olio tartufato', price: '13.00', vegetariana: false, piccante: false }
  ]
}
</script>

<template>
  <div class="py-8 space-y-8">
    <!-- TITOLO PAGINA -->
    <div class="text-center space-y-2">
      <h1 class="text-4xl font-extrabold tracking-tight">Il Nostro Menu</h1>
      <p class="text-neutral-500 max-w-xl mx-auto">
        Tutte le nostre pizze sono preparate con un impasto a lievitazione naturale di 48 ore.
      </p>
    </div>

    <!-- TABS E LISTA PIZZE -->
<!-- CAMBIA #item IN #content -->
<UTabs :items="categories" class="w-full">
  <template #content="{ item }">
    <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      <UCard 
        v-for="pizza in menu[item.key]" 
        :key="pizza.name"
        class="hover:border-red-500 transition-colors"
      >
        <div class="flex justify-between items-start gap-4">
          <div>
            <div class="flex items-center gap-2">
              <h3 class="text-lg font-bold">{{ pizza.name }}</h3>
              
              <UBadge v-if="pizza.vegetariana" color="green" variant="subtle" size="xs">
                Veg
              </UBadge>
              <UBadge v-if="pizza.piccante" color="red" variant="subtle" size="xs">
                Piccante
              </UBadge>
            </div>
            
            <p class="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
              {{ pizza.ingredients }}
            </p>
          </div>

          <span class="text-lg font-extrabold text-red-600 whitespace-nowrap">
            €{{ pizza.price }}
          </span>
        </div>
      </UCard>
    </div>
  </template>
</UTabs>
  </div>
</template>