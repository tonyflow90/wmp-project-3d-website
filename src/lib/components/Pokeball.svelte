<script>
    import { onMount } from "svelte";

    onMount(() => {});

    export let animate = false;
    export let shake = false;
    export let blink = false;
</script>

<div class="pokeball {animate || shake ? 'shake' : ''}">
    <div class="pokeball__button {animate || blink ? 'blink' : ''}" />
</div>

<style>
    :root {
        --size: 200px;
    }

    *,
    *:before,
    *:after {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    .pokeball {
        position: relative;
        width: var(--size);
        height: var(--size);
        background: #fff;
        border: calc(var(--size) * 0.05) solid #000;
        border-radius: 50%;
        overflow: hidden;
        box-shadow: inset calc(var(--size) * 0.05 * -1) calc(var(--size) * 0.05)
            0 calc(var(--size) * 0.05) #ccc;
        /* animation: shake 1.25s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite; */
    }

    .shake {
        animation: shake 1.25s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite;
    }

    .pokeball::before,
    .pokeball::after {
        content: "";
        position: absolute;
    }
    .pokeball::before {
        background: red;
        width: 100%;
        height: 50%;
        top: 0;
        left: 0;
        right: 0;
    }
    .pokeball::after {
        top: calc(50%);
        width: 100%;
        height: calc(var(--size) * 0.1);
        background: #000;
        bottom: 0;
        left: 0;
        right: 0;
    }

    .pokeball__button {
        position: absolute;
        top: calc(50% - calc(var(--size) * 0.1));
        left: calc(50% - calc(var(--size) * 0.1));
        width: calc(var(--size) * 0.2);
        height: calc(var(--size) * 0.2);
        background: #7f8c8d;
        border: calc(var(--size) * 0.05) solid #fff;
        border-radius: 50%;
        z-index: 10;
        box-shadow: 0 0 0 calc(var(--size) * 0.05) black;
    }

    .blink {
        animation: blink 0.5s alternate infinite;
    }

    @keyframes blink {
        from {
            background: #eee;
        }
        to {
            background: #e74c3c;
        }
    }
    @keyframes shake {
        0% {
            transform: translate(0, 0) rotate(0);
        }
        20% {
            transform: translate(-10px, 0) rotate(-20deg);
        }
        30% {
            transform: translate(10px, 0) rotate(20deg);
        }
        50% {
            transform: translate(-10px, 0) rotate(-10deg);
        }
        60% {
            transform: translate(10px, 0) rotate(10deg);
        }
        100% {
            transform: translate(0, 0) rotate(0);
        }
    }
</style>
