<script>
    import { onMount } from "svelte";

    onMount(() => {});

    const sets = [
        "Base",
        "Gym",
        "Neo",
        "Other",
        "E-Card",
        "EX",
        "NP",
        "POP",
        "Diamond & Pearl",
        "Platinum",
        "HeartGold & SoulSilver",
        "Black & White",
        "XY",
        "Sun & Moon",
        "Sword & Shield",
    ];

    let getHueColors = () => {
        const hueColors = [...Array(sets.length).keys()].map(
            (x) => (x + 1) * (360 / sets.length)
        );
        let aColor = [];
        sets.forEach((s, i) => {
            aColor.push({ id: s, color: hueColors[i] });
        });
        return aColor;
    };

    let colors = getHueColors();

    let getSetColor = (id) => {
        let obj = colors.find((c) => c.id == id);
        return obj.color;
    };

    export let set;

    export let spin = false;
</script>

<div class="scene" style="--hue:{getSetColor(set.series)}">
    <div class="cube {spin ? 'spin' : ''}">
        <div class="cube__face cube__face--front">
            <div class="setbox-grid">
                <div class="image">
                    <img src={set.images.logo} alt={set.name} />
                </div>
                <div class="text">
                    <h2>
                        <span>{set.name}</span>
                    </h2>
                    <span>{set.series}</span>
                </div>
            </div>
        </div>
        <div class="cube__face cube__face--back" />
        <div class="cube__face cube__face--right" />
        <div class="cube__face cube__face--left darken" />
        <div class="cube__face cube__face--top lighten" />
        <div class="cube__face cube__face--bottom darken" />
    </div>
</div>

<style>
    :root {
        --setbox-size-x: 200px;
        --setbox-size-y: 300px;
        --setbox-size-z: 100px;
        --hue: 265;
        --saturation: 64%;
        --light: 44%;
        --transform: translateZ(0px) rotate3d(1, -3, 0, -30deg);
        --setbox-border: 0px solid black;
    }

    * {
        box-sizing: border-box;
    }
    * {
        --color: hsl(var(--hue), var(--saturation), var(--light));
        --color-lighten: hsl(
            var(--hue),
            var(--saturation),
            calc(var(--light) + 10%)
        );
        --color-darken: hsl(
            var(--hue),
            var(--saturation),
            calc(var(--light) - 10%)
        );
    }

    .scene {
        width: calc(var(--setbox-size-x) * 1.1);
        height: calc(var(--setbox-size-y) * 1.1);
    }

    .setbox-grid {
        display: grid;
        justify-items: center;
        width: calc(var(--setbox-size-x) * 1);
        height: calc(var(--setbox-size-y) * 1);
        grid-template-columns: 1fr;
        grid-template-rows: repeat(2, 1fr);
    }

    .image {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    img {
        width: calc(var(--setbox-size-x) * 0.7);
    }

    .text {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 20px 0;
        width: calc(var(--setbox-size-x) * 0.9);
        height: calc(var(--setbox-size-y) * 0.3);
        border-radius: 10px;
        background-color: var(--color-lighten);
        color: var(--color-darken);
    }

    .text h2 {
        font-size: 1em;

        color: white;
    }

    .cube {
        width: var(--setbox-size-x);
        height: var(--setbox-size-y);
        position: relative;
        transform-style: preserve-3d;
        transform: translateZ(0px) rotate3d(1, -3, 0, -5deg);
    }

    .cube:hover {
        transform: var(--transform);
        transition: transform 1s;
    }

    .cube__face {
        display: flex;
        flex-direction: column;
        align-items: center;
        /* justify-content: center; */
        position: absolute;
        background: var(--color);
        border: var(--setbox-border);
        text-align: center;
    }

    .lighten {
        background: var(--color-lighten);
    }

    .darken {
        background: var(--color-darken);
    }

    .cube__face--front {
        width: var(--setbox-size-x);
        height: var(--setbox-size-y);
        transform: rotateY(0deg) translateZ(calc(var(--setbox-size-z) / 2));
    }

    .cube__face--front:after {
        content: "";
        position: absolute;
        top: 0;
        height: calc(var(--setbox-size-y) / 3);
        left: 0;
        right: 0;
        box-shadow: 0px 3px 3px -1px rgba(0, 0, 0, 0.5);
    }

    .cube__face--back {
        width: var(--setbox-size-x);
        height: var(--setbox-size-y);
        transform: rotateY(180deg) translateZ(calc(var(--setbox-size-z) / 2));
    }

    .cube__face--right {
        width: var(--setbox-size-z);
        height: var(--setbox-size-y);
        transform: rotateY(90deg)
            translateZ(calc(var(--setbox-size-x) - var(--setbox-size-z) / 2));
    }
    .cube__face--left {
        width: var(--setbox-size-z);
        height: var(--setbox-size-y);
        transform: rotateY(-90deg) translateZ(calc(var(--setbox-size-z) / 2));
    }

    .cube__face--left:after {
        content: "";
        position: absolute;
        top: 0;
        height: calc(var(--setbox-size-y) / 2);
        left: 0;
        right: 0;
        width: calc(var(--setbox-size-z) + 15px);
        transform: rotate(25deg) translate3d(-5px, -72px, 0);
        overflow: hidden;
        box-shadow: 0px 3px 0px -1px rgba(0, 0, 0, 0.5);
    }

    .cube__face--top {
        width: var(--setbox-size-x);
        height: var(--setbox-size-z);
        transform: rotateX(90deg) translateZ(calc(var(--setbox-size-z) / 2));
    }
    .cube__face--bottom {
        width: var(--setbox-size-x);
        height: var(--setbox-size-z);
        transform: rotateX(-90deg)
            translateZ(calc(var(--setbox-size-y) - var(--setbox-size-z) / 2));
    }

    .spin {
        transform-style: preserve-3d;
        animation: spin 4s linear infinite;
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
</style>
