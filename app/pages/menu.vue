<script setup>
useSeoMeta({
  title: 'Menu Pizze - Pizzeria La Capricciosa',
  description: 'Sfoglia il nostro menu con pizze rosse, bianche e specialità preparate con ingredienti freschi.'
})

// Tab per la navigazione del menu
const categories = [
  { label: 'Pizze Rosse', icon: 'i-heroicons-fire', key: 'rosse' },
  { label: 'Pizze Bianche', icon: 'i-heroicons-sparkles', key: 'bianche' },
  { label: 'Pizze Tonde', icon: 'i-heroicons-star', key: 'tonde' }
]

// Lista dei prodotti divisa per categoria
const menu = {
  rosse: [
    { name: 'Rossa', ingredients: 'Pomodoro,origano', price: '2,30', vegetariana: true, piccante: false },
    { name: 'Margherita', ingredients: 'Pomodoro, mozzarella', price: '2,70', vegetariana: true, piccante: false },
    { name: 'Prosciutto', ingredients: 'Pomodoro, mozzarella, prosciutto cotto', price: '3,30', vegetariana: false, piccante: false },
    { name: 'Napoli', ingredients: 'Pomodoro, mozzarella, capperi, acciughe', price: '3,30', vegetariana: true, piccante: false },
    { name: 'Frutti di mare', ingredients: 'Pomodoro, mozzarella, frutti di mare', price: '3,30', vegetariana: false, piccante: false },
    { name: 'Wurstel e cipolle', ingredients: 'Pomodoro, mozzarella, wurstel, cipolle', price: '3,50', vegetariana: false, piccante: false },
    { name: 'Boscaiola', ingredients: 'Pomodoro, mozzarella, funghi, salsicce', price: '3,50', vegetariana: false, piccante: false },
    { name: 'Salsicce', ingredients: 'Pomodoro, mozzarella, salsicce', price: '3,50', vegetariana: true, piccante: false },
    { name: 'Capricciosa', ingredients: 'Pomodoro, mozzarella, prosciutto cotto, funghi, capperi, acciughe, carciofi, olive', price: '3,50', vegetariana: false, piccante: false },
    { name: '4 Formaggi', ingredients: 'Pomodoro, mozzarella, gorgonzola, fontina, gruviera', price: '3,50', vegetariana: false, piccante: false },
    { name: 'Verdure', ingredients: 'Pomodoro, mozzarella, melanzane, zucchine, peperoni', price: '3,50', vegetariana: true, piccante: false },
    { name: 'Gorgonzola', ingredients: 'Pomodoro, mozzarella, gorgonzola', price: '3,50', vegetariana: false, piccante: false },
    { name: 'Prosciutto e funghi', ingredients: 'Pomodoro, mozzarella, prosciutto cotto, funghi', price: '3,50', vegetariana: false, piccante: false },
    { name: 'Tonno', ingredients: 'Pomodoro, mozzarella, tonno', price: '3,50', vegetariana: false, piccante: false },
    { name: 'Tonno e cipolla', ingredients: 'Pomodoro, mozzarella, tonno, cipolla', price: '3,50', vegetariana: false, piccante: false },
  ],
  bianche: [
    { name: 'Funghi', ingredients: 'Mozzarella, funghi', price: '3,30', vegetariana: true, piccante: false },
    { name: 'Peperoni', ingredients: 'Mozzarella, peperoni', price: '3,30', vegetariana: true, piccante: false },
    { name: 'Melanzane', ingredients: 'Mozzarella, melanzane', price: '3,30', vegetariana: true, piccante: false },
    { name: 'Zucchine', ingredients: 'Mozzarella, zucchine', price: '3,30', vegetariana: true, piccante: false },
    { name: 'Patate', ingredients: 'Mozzarella, patate al forno', price: '3,50', vegetariana: true, piccante: false },
  ],
  tonde: [
    { name: 'Margherita', ingredients: 'Pomodoro, mozzarella', price: '5,50', vegetariana: true, piccante: false },
    { name: 'Prosciutto', ingredients: 'Pomodoro, mozzarella, prosciutto cotto', price: '6,50', vegetariana: false, piccante: false },
    { name: 'Wurstel', ingredients: 'Pomodoro, mozzarella, wurstel', price: '6,50', vegetariana: false, piccante: false },
    { name: 'Napoli', ingredients: 'Pomodoro, mozzarella, capperi, acciughe', price: '6,50', vegetariana: true, piccante: false },
    { name: 'Boscaiola', ingredients: 'Pomodoro, mozzarella, funghi, salsicce', price: '7,50', vegetariana: false, piccante: false },
    { name: 'Salsicce', ingredients: 'Pomodoro, mozzarella, salsicce', price: '7,00', vegetariana: true, piccante: false },
    { name: 'Capricciosa', ingredients: 'Pomodoro, mozzarella, prosciutto cotto, funghi, capperi, acciughe, carciofi, olive', price: '7,50', vegetariana: false, piccante: false },
    { name: '4 Formaggi', ingredients: 'Pomodoro, mozzarella, gorgonzola, fontina, gruviera', price: '8,00', vegetariana: false, piccante: false },
    { name: 'Prosciutto e funghi', ingredients: 'Pomodoro, mozzarella, prosciutto cotto, funghi', price: '7,50', vegetariana: false, piccante: false },
    { name: 'Salame', ingredients: 'Pomodoro, mozzarella, salame', price: '7,50', vegetariana: false, piccante: false },
    { name: 'Calzone', ingredients: 'Pomodoro, mozzarella, prosciutto cotto, fontina', price: '7,00', vegetariana: false, piccante: false },

  ]
}
</script>

<template>
  <div class="py-8 space-y-8">
    <!-- TITOLO PAGINA -->
    <div class="text-center space-y-2">
      <h1 class="text-4xl font-extrabold tracking-tight">Le nostre Pizze</h1>
      <p class="text-neutral-500 max-w-xl mx-auto">
        Tutte le nostre pizze sono preparate con un impasto a lievitazione naturale.
      </p>
    </div>

    <!-- TABS E LISTA PIZZE -->
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
              
              <UBadge v-if="pizza.vegetariana" color="success" variant="subtle" size="xs">
                Veg
              </UBadge>
              <UBadge v-if="pizza.piccante" color="primary" variant="subtle" size="xs">
                Piccante
              </UBadge>
            </div>
            
            <p class="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
              {{ pizza.ingredients }}
            </p>
          </div>

          <span class="text-lg font-extrabold text-primary-600 whitespace-nowrap">
            €{{ pizza.price }}
          </span>
        </div>
      </UCard>
    </div>
  </template>
</UTabs>
  </div>
</template>