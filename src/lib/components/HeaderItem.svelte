<script>
</script>

<div class="header-item">
    <div class="header-item-content">
        <div class="header-item-icon">
            <slot name="icon" />
        </div>
        <div class="header-item-text">
            <slot />
        </div>
    </div>
</div>

<style>
    :root {
        --header-item-width: 100px;
        --header-item-color-text: white;
    }

    .header-item {
        min-width: var(--header-item-width, 100px);
        padding: 0px 20px;
    }

    .header-item:hover {
        transition: ease-in-out .25s;
        transform: scale3d(1.2,1.2,1.2);
    }

    .header-item-content {
        display: flex;
        flex-direction: row;
        min-height: 100px;
        color: var(--header-item-color-text);
    }

    .header-item-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: .5em;
        font-weight: bold;
        text-align: center;
    }

    .header-item-text {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: inherit;
        width: inherit;
        color: var(--header-item-color-text);
        font-size: 1.5em;
        font-weight: bold;
        text-align: center;
    }

    /* @media only screen and (max-width: 1600px) {
        .header-item {
            width: 600px;
        }
    }

    @media only screen and (max-width: 900px) {
        .header-item {
            width: 500px;
        }
    }

    @media only screen and (max-width: 600px) {
        .header-item {
            width: 300px;
        }
    } */
</style>
