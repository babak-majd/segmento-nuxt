<template>
  <NuxtLink
    :to="to ?? ''"
    class="flex flex-col justify-between h-full px-2 rounded-sm text-base-300"
    :class="active ? 'text-primary' : 'text-base-300'"
  >
    <div
      class="flex flex-col justify-center h-full px-2 rounded-sm text-base-300 text-sm"
      :class="active ? 'text-primary' : 'text-base-300'"
    >
      <span>
        <slot> </slot>
      </span>
    </div>
    <hr class="w-3/5 mx-auto mt-1 h-[2px] rounded-full" :class="active ? 'border-primary bg-primary' : 'border-transparent'" />
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  to: {
    type: [String, undefined],
    required: false,
    default: undefined,
  },
  active: {
    type: Boolean,
    default: false,
  },
});
</script>
