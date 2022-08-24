const express = require('express');
const request = require('sync-request');

const router = express.Router();

function stack_box(stack_name, simple_explane, youtube_link){
    return `
    <div class="explane-box" style="box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px; border-radius: 0.5em;">
        <h1>What is ${stack_name} ?</h1>
        <p>${simple_explane}</p>
    </div>
    <div class="video-container" style="text-align: center;">
        <iframe width="640" height="360" src=${youtube_link} frameborder="0" allowfullscreen></iframe>
    </div>
    `;
};

function curriculum_box(curriculum_image) {
    return `
    <div class="row">
        <embed src=${curriculum_image} type="application/pdf" width="100%" height="800px" />
    </div>
    <!-- About Section Button-->
    <div class="text-center mt-4">
        <a class="btn btn-xl btn-outline-light" href="https://roadmap.sh/">
            <i class="fas fa-download me-2"></i>
            git roadmap page
        </a>
    </div>
    `
};

router.use(express.static('public'));

router.get("/", (req, res) => {
    console.log("hello routes");
});

router.get("/:name", (req, res) => {

    console.log(`${req.params.name}`);
    back_url = `http://127.0.0.1:50569/api/stack/${req.params.name}`;

    obj = JSON.parse((request('GET', back_url)).getBody().toString());
    
    stack_name = obj.real_name;
    simple_explane = obj.simple_explane;
    youtube_link = obj.basic_youtube;
    curriculum_image = obj.curriculum_image;
    implementation_or_famous_image = obj.implementation_or_famous_image;

    var output = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="description" content="" />
            <meta name="author" content="" />
            <title>introduce dev course</title>
            
            <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
            <script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js" crossorigin="anonymous"></script>
            <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
            <link href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic" rel="stylesheet" type="text/css" />
            <link href="css/styles.css" rel="stylesheet" />
            
        </head>
    
        <body id="page-top">
            <!-- Navigation-->
            <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
                <div class="container">
                    <a class="navbar-brand" href="#page-top">Start Developer Course</a>
                    <button class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i class="fas fa-bars"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#Stack">Stack</a></li>
                            <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#curriculum">Curriculum</a></li>
                            <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#implementation">implementaion or famous</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <!-- Masthead-->
            <header class="masthead bg-primary text-white text-center">
                <div class="container d-flex align-items-center flex-column">
                    <!-- Masthead Avatar Image-->
                    <img class="masthead-avatar mb-5" src="assets/img/programmer.png" alt="..." />
                    <!-- Masthead Heading-->
                    <h1 class="masthead-heading text-uppercase mb-0">Start Developer course</h1>
                    <!-- Icon Divider-->
                    <div class="divider-custom divider-light">
                        <div class="divider-custom-line"></div>
                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                        <div class="divider-custom-line"></div>
                    </div>
                    <!-- Masthead Subheading-->
                    <p class="masthead-subheading font-weight-light mb-0">For beginner, I present simple curriculum</p>
                    
                    <div class="text-center mt-4">
                        <a class="btn btn-xl btn-outline-light" href="/">
                            <i class="fas fa-download me-2"></i>
                            home
                        </a>
                    </div>
                </div>
            </header>
            <!-- Carrer Section-->
            <section class="page-section carrer" id="Stack">
                <div class="container">
                    <!-- carrer Section Heading-->
                    <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Stack</h2>
                    <!-- Icon Divider-->
                    <div class="divider-custom">
                        <div class="divider-custom-line"></div>
                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                        <div class="divider-custom-line"></div>
                    </div>
                    
                    ${stack_box(stack_name, simple_explane, youtube_link)}
                </div>
            </section>
            <!-- About Section-->
            <section class="page-section bg-primary text-white mb-0" id="curriculum">
                <div class="container">
                    <!-- About Section Heading-->
                    <h2 class="page-section-heading text-center text-uppercase text-white">curriculum</h2>
                    <!-- Icon Divider-->
                    <div class="divider-custom divider-light">
                        <div class="divider-custom-line"></div>
                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                        <div class="divider-custom-line"></div>
                    </div>
                    <!-- About Section Content-->
                    ${curriculum_box(curriculum_image)}
                </div>
            </section>
            <!-- About Section-->
            <section class="page-section bg-secondary text-white mb-0" id="implementation">
                <div class="container">
                    <!-- About Section Heading-->
                    <h2 class="page-section-heading text-center text-uppercase text-white">implementation or famous</h2>
                    <!-- Icon Divider-->
                    <div class="divider-custom divider-light">
                        <div class="divider-custom-line"></div>
                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                        <div class="divider-custom-line"></div>
                    </div>
                    <!-- About Section Content-->
                    <div class="row">
                        <img src=${implementation_or_famous_image}>
                    </div>
                </div>
            </section>
            <!-- Footer-->
            <footer class="footer text-center">
                <div class="container">
                    <div class="row">
                        <!-- Footer Location-->
                        <div class="col-lg-4 mb-5 mb-lg-0">
                            <h4 class="text-uppercase mb-4">Location</h4>
                            <p class="lead mb-0">
                                서울과학기술대학교 무궁관
                                <br />
                                712호
                            </p>
                        </div>
                        <!-- Footer Social Icons-->
                        <div class="col-lg-4 mb-5 mb-lg-0">
                            <h4 class="text-uppercase mb-4">Around the Web</h4>
                            <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-facebook-f"></i></a>
                            <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-twitter"></i></a>
                            <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-linkedin-in"></i></a>
                            <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-dribbble"></i></a>
                        </div>
                        <!-- Footer About Text-->
                        <div class="col-lg-4">
                            <h4 class="text-uppercase mb-4">About contact</h4>
                            <p class="lead mb-0">
                                메일은 언제든지 받습니다. 
                                contact은 해당 주소로 보내주세요
                                jyjin3@me.com
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
            <!-- Copyright Section-->
            <div class="copyright py-4 text-center text-white">
                <div class="container"><small>Copyright &copy; Yureutae Website 2022 for dynamic web programming Assignment</small></div>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
            
        </body>
    </html>    
    `;

    res.send(output);



});
module.exports=router;