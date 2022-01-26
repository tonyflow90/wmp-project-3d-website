<script>
    import { onMount } from "svelte";

    onMount(() => {
        addListener();
    });

    export let angle = 5;

    let addListener = () => {
        // window.document.addEventListener("pointermove", move);
    };

    let move = (e) => {
        debugger;
        let docX = e.x,
            docy = e.y;
        console.log("x position: ", e.x, e.clientX);
        console.log("y position: ", e.y, e.clientY);
    };

    let getXY = (el) => {
        let y = parseInt(
            el.style.transform.replace("rotateY(", "").replace("deg)", "")
        );
        let x = parseInt(
            el.style.transform.replace("rotateX(", "").replace("deg)", "")
        );
        if (isNaN(x)) x = 0;
        if (isNaN(y)) y = 0;

        return [x, y];
    };

    let rotate = (e, el) => {
        let [x, y] = getXY(el);

        let xp = e.clientX - el.getBoundingClientRect().x > 0;
        let yp = e.clientY - el.getBoundingClientRect().y > 0;

        window.requestAnimationFrame(function () {
            let degY, degX;
            if (yp) degY = y - angle;
            else degY = y + angle;

            if (xp) degX = x - angle / 2;
            else degX = x + angle / 2;

            if (degY > 360) degY = 0;
            if (degX > 360) degX = 0;
            // rotate y
            el.style.transform = `rotateY(${degY}deg)`;
            // rotate x
            // el.style.transform = `rotateX(${degX}deg)`;
            // rotate x & y
            // el.style.transform = `rotateY(${degY}deg) rotateX(${degX}deg)`;
        });
    };
</script>

<div id="tilt" on:pointermove={move} class="container">
    <slot />
</div>

<style>
    .container {
        cursor: move;
    }
</style>
