const navBar = `
    <nav id="sidebar" style="z-index: 9;">
        <div class="custom-menu">
            <button type="button" id="sidebarCollapse" class="btn btn-primary">
                <i class="fa fa-bars"></i>
                <span class="sr-only">Toggle Menu</span>
            </button>
        </div>
        <div class="p-4">
         <h1><a href="./index.html" class="logo"> <img src="../public/images/newLogo.png" class="img-fluid" style="width: 40%; height= : 55%; margin-left: 20%;"></a></h1>
<!--            <ul class="list-unstyled components mb-5">-->
<!--                <li id="liHome" >-->
<!--                    <a  href="./index.html"><span class="fa fa-home mr-3"></span>Home</a>-->
<!--                </li>-->
<!--            <h1><a href="./workingDaysHrs.html" class="logo">A B C <span>Schedule App</span></a></h1>-->
            <div class="area"></div><nav class="main-menu">
            <ul>
                <li>
                    <a  href="./index.html">
                        <i class="fa fa-home mr-3"></i>
                        <span class="nav-text">
                            Home
                        </span>
                    </a>
                  
                </li>
                <li class="has-subnav">
                   <a  href="./timetables.html">
                        <i class="fa fa-home mr-3"></i>
                        <span class="nav-text">
                            TimeTables
                        </span>
                    </a>
                    
                </li>
                <li class="has-subnav">
                    <a href="./workingDaysHrs.html">
                       <i class="fa fa-briefcase mr-3"></i>
                        <span class="nav-text">
                            Working days and hours
                        </span>
                    </a>
                    
                </li>
                <li class="has-subnav">
                    <a href="./subjects.html">
                       <i class="fa fa-paperclip mr-3"></i>
                        <span class="nav-text">
                            Subjects
                        </span>
                    </a>
                   
                </li>
                <li>
                  <a href="./tags.html">
                        <i class="fa fa-tag mr-3"></i>
                        <span class="nav-text">
                            Tags
                        </span>
                    </a>
                </li>
                <li>
                    <a href="./lecturers.html">
                        <i class="fa fa-suitcase"></i>
                        <span class="nav-text">
                           Lecturers
                        </span>
                    </a>
                </li>
                <li>
                   <a href="./student.html">
                       <i class="fa fa-user mr-3"></i>
                        <span class="nav-text">
                            Student
                        </span>
                    </a>
                </li>
                <li>
                    <a href="./session.html">
                        <i class="fa fa-life-ring mr-3"></i>
                        <span class="nav-text">
                            Session
                        </span>
                    </a>
                </li>
                <li>
                  <a href="./statistics.html">
                       <i class="fa fa-line-chart mr-3"></i>
                        <span class="nav-text">
                            Statistics
                        </span>
                    </a>
                </li>
                <li>
                 <a href="./generalSettings.html">
                       <i class="fa fa-list mr-3"></i>
                        <span class="nav-text">
                            Schedule Management
                        </span>
                    </a>
                </li>
                <li>
                 <a href="./location.html">
                       <i class="fa fa-location-arrow mr-3"></i>
                        <span class="nav-text">
                            Location
                        </span>
                    </a>
                </li>
                <li>
                   <a href="./settings.html">
                       <i class="fa fa-cogs mr-3"></i>
                        <span class="nav-text">
                            Settings
                        </span>
                    </a>
                </li>
            </ul>

        </nav>

         </div>
    
`;

module.exports = { navBar }
