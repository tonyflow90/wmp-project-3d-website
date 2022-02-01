<script>
    import { base } from "$app/paths";
    import { goto } from "$app/navigation";
    import { routes } from "$lib/routes";

    import Trapezoid from "$lib/components/Trapezoid.svelte";
</script>

<div class="footer">
    <Trapezoid top --hue="200">
        <div class="footer-grid">
            <div class="footer-grid-item">
                <p class="title">Links</p>
                <ul class="card-info-grid background">
                    <li>
                        <a
                            href="https://github.com/tonyflow90/wmp-project-3d-website"
                        >
                            <p class="text">wmp-project-3d-website</p>
                        </a>
                        <span class="small">Repository</span>
                    </li>
                </ul>
            </div>

            <div class="footer-grid-item">
                <p class="title">Info</p>
                <ul class="card-info-grid background">
                    <li>
                        <p class="text">Keno Bohen</p>
                        <span class="small">Creator</span>
                    </li>
                    <li>
                        <p class="text">123456</p>
                        <span class="small">Matnr:</span>
                    </li>
                </ul>
            </div>

            <div class="footer-grid-item">
                <p class="title">Contact</p>
                <ul class="card-info-grid background">
                    <li>
                        <a href="mailto:keno.bohlen@gmail.com">
                            <p class="text">keno.bohlen@gmail.com</p>
                        </a>
                        <span class="small">Email</span>
                    </li>
                </ul>
            </div>
        </div>
    </Trapezoid>
</div>

<style>
    .footer {
        margin-top: -20px;
        width: 100%;
        color: white;
    }

    ul {
        margin: 0;
        padding: 0;
    }

    li {
        list-style: none;
    }

    .footer-grid {
        display: grid;
        align-self: center;
        grid-template-columns: repeat(3, 1fr);
    }
    @media only screen and (max-width: 1600px) {
        .footer-grid {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media only screen and (max-width: 900px) {
        .footer-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media only screen and (max-width: 600px) {
        .footer-grid {
            grid-template-columns: repeat(1, 1fr);
        }
    }

    .footer-grid-item {
        display: flex;
        text-align: start;
        padding: 0px 20px;
        padding-bottom: 20px;
        flex-direction: column;
    }
    .title {
        font-size: 1.8em;
        font-weight: 600;
        margin-bottom: 0px;
    }

    .text {
        color: white;
        font-size: 1.2em;
        font-weight: 600;
        margin-bottom: 0px;
    }

    .small {
        margin-top: 0px;
        font-weight: 400;
        font-variant-caps: all-petite-caps;
        letter-spacing: 0.1em;
        font-size: 0.8em;
    }
</style>
