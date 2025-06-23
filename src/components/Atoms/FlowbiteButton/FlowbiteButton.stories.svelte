<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Button from './FlowbiteButton.svelte';
  import { fn } from 'storybook/test';

  defineMeta({
    title: 'Example/Button',
    component: Button,
  });
</script>

<template>
  <Button on:click={fn('clicked')}>Click me</Button>
</template>

<style>
  /* Add any component-specific styles here */
</style>
