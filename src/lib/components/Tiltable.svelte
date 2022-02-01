<script>
    import { onMount } from "svelte";

    import VanillaTilt from "vanilla-tilt";

    onMount(() => {
        // const elements = document.querySelectorAll("#tilt");
        // VanillaTilt.init(elements);
    });
</script>

<div id="tilt" class="container">
    <slot />
</div>

<style>
    .container {
        transform-style: preserve-3d;
    }

    .container:hover {
        transform-style: preserve-3d;
        animation: tilt 5s linear 1;
    }

    @-moz-keyframes spin {
        100% {
            -moz-transform: rotate(360deg);
        }
    }
    @-webkit-keyframes spin {
        100% {
            -webkit-transform: rotate(360deg);
        }
    }
    @keyframes spin {
        from {
            -webkit-transform: rotate(0deg);
            transform: translateZ(0px) rotate3d(1, 0, 0, -30deg);
            transform: rotateX(-10deg) rotateY(0deg);
        }
        to {
            -webkit-transform: rotate(360deg);
            transform: translateZ(0px) rotate3d(1, 0, 0, -30deg);
            transform: rotateX(-10deg) rotateY(360deg);
        }
    }

    @keyframes tilt {
        0% {
            transform: rotate3d(1, 1, 0, 0deg);
        }
        20% {
            transform: rotate3d(1, -1, 0, 15deg);
        }
        40% {
            transform: rotate3d(1, 1, 0, 15deg);
        }
        60% {
            transform: rotate3d(1, -1, 0, -15deg);
        }
        80% {
            transform: rotate3d(1, 1, 0, -15deg);
        }
        100% {
            transform: rotate3d(1, 1, 0, 0deg);
        }
    }
</style>
