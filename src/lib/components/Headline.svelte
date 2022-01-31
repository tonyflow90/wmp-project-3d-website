<script>
    import Trapezoid from "$lib/components/Trapezoid.svelte";
</script>

<div class="headline">
    <Trapezoid bottom>
        <div class="headline-content">
            <div class="headline-icon">
                <slot name="icon" />
            </div>
            <div class="headline-text">
                <slot />
            </div>
        </div>
    </Trapezoid>
</div>

<style>
    :root {
        --headline-width: 600px;
    }

    .headline {
        width: 100%;
        max-width: var(--headline-width);
        padding-bottom: calc(var(--headline-width) * 0.04);
        padding-top: calc(var(--headline-width) * 0.06);
    }

    .headline-content {
        display: flex;
        flex-direction: column;
        min-height: 100px;
    }

    .headline-icon {
        font-size: 1.5em;
        font-weight: bold;
        text-align: center;
    }

    .headline-text {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: inherit;
        width: inherit;
        font-size: 2.5em;
        font-weight: bold;
        text-align: center;
    }

    @media only screen and (max-width: 1600px) {
        .headline {
            max-width: 600px;
        }
    }

    @media only screen and (max-width: 900px) {
        .headline {
            max-width: 500px;
        }
    }

    @media only screen and (max-width: 600px) {
        .headline {
            max-width: 300px;
        }
    }
</style>
