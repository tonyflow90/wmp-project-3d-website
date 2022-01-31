<script>
    export let message;
</script>

<div class="content">
    <h2 class="text_shadows">Error</h2>
    <span>
        {#if message}
            {message}
        {/if}
    </span>
</div>

<style>
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    :root {
        --color-primary: #d93927;
        --color-secondary: #e63c29;
        --color-tertiary: #f23f2c;
        --color-quaternary: #ff432e;
        --color-quinary: #ff422e;
    }

    .content {
        display: flex;
        align-content: center;
        justify-content: center;
        font-family: canada-type-gibson, sans-serif;
        font-weight: 300;
        font-size: 1em;
    }

    .text_shadows {
        text-shadow: 1px 1px 0 var(--color-secondary),
            2px 2px 0 var(--color-tertiary), 3px 3px var(--color-quaternary),
            4px 4px 0 var(--color-quinary);
        font-family: bungee, sans-serif;
        font-weight: 600;
        text-transform: uppercase;
        font-size: 2em;
        text-align: center;
        margin: 0;
        color: var(--color-primary);
        animation: shadows 1.2s ease-in infinite, move 1.2s ease-in infinite;
        letter-spacing: 0.4rem;
    }

    @keyframes shadows {
        0% {
            text-shadow: none;
        }
        10% {
            text-shadow: 1px 1px 0 var(--color-secondary);
        }
        20% {
            text-shadow: 1px 1px 0 var(--color-secondary),
                2px 2px 0 var(--color-tertiary);
        }
        30% {
            text-shadow: 1px 1px 0 var(--color-secondary),
                2px 2px 0 var(--color-tertiary), 3px 3px var(--color-quaternary);
        }
        40% {
            text-shadow: 1px 1px 0 var(--color-secondary),
                2px 2px 0 var(--color-tertiary), 3px 3px var(--color-quaternary),
                4px 4px 0 var(--color-quinary);
        }
        50% {
            text-shadow: 1px 1px 0 var(--color-secondary),
                2px 2px 0 var(--color-tertiary), 3px 3px var(--color-quaternary),
                4px 4px 0 var(--color-quinary);
        }
        60% {
            text-shadow: 1px 1px 0 var(--color-secondary),
                2px 2px 0 var(--color-tertiary), 3px 3px var(--color-quaternary),
                4px 4px 0 var(--color-quinary);
        }
        70% {
            text-shadow: 1px 1px 0 var(--color-secondary),
                2px 2px 0 var(--color-tertiary), 3px 3px var(--color-quaternary);
        }
        80% {
            text-shadow: 1px 1px 0 var(--color-secondary),
                2px 2px 0 var(--color-tertiary);
        }
        90% {
            text-shadow: 1px 1px 0 var(--color-secondary);
        }
        100% {
            text-shadow: none;
        }
    }

    @keyframes move {
        0% {
            transform: translate(0px, 0px);
        }
        40% {
            transform: translate(-4px, -4px);
        }
        50% {
            transform: translate(-4px, -4px);
        }
        60% {
            transform: translate(-4px, -4px);
        }
        100% {
            transform: translate(0px, 0px);
        }
    }
</style>
