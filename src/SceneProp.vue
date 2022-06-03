<template>
    <mesh>
        <RoundedBoxGeometry :args="boxArgs" />
        <meshToonMaterial :color="color" />
    </mesh>
</template>

<script lang="ts" setup>
const { color, boxArgs } = defineProps<{
    color: string
    boxArgs: Record<string, any>
}>()
</script>