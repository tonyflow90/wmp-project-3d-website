<script>
    import { base } from "$app/paths";
    import { goto } from "$app/navigation";
    import { routes } from "$lib/routes";

    import Trapezoid from "$lib/components/Trapezoid.svelte";
</script>

<div class="footer">
    <Trapezoid top --hue="200">
        <div class="grid">
            <a sveltekit:prefetch href="{base}/" />
        </div>
    </Trapezoid>
</div>

<style>
    .footer {
        margin-top: -20px;
        width: 100%;
    }
    .grid {
        min-height: 200px;
    }
</style>
