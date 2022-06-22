<script>
  import InfoPanel from "$lib/slot/InfoPanel.svelte";
  import ButtonMatrix from "$lib/components/ButtonMatrix.svelte";
  import Header from "$lib/layout/Header.svelte";
  import Hero from "$lib/layout/Hero.svelte";
  import Demo from "$lib/components/Demo.svelte";

  import { widgetCenter, reporting, callendar } from "$lib/icons";

  import Widget_center_icon from "$lib/components/icons/Widget_center_icon.svelte";
  import Calendar_icon from "$lib/components/icons/Calendar_icon.svelte";
  import Reporting_icon from "$lib/components/icons/Reporting_icon.svelte";
  import Mass_comm_icon from "$lib/components/icons/Mass_comm_icon.svelte";
  import Employee_tracking_icon from "$lib/components/icons/Employee_tracking_icon.svelte";
  import Tasks_icon from "$lib/components/icons/Tasks_icon.svelte";
  import Auto_drip_icon from "$lib/components/icons/Auto_drip_icon.svelte";
  import Leads_members_icon from "$lib/components/icons/Leads_members_icon.svelte";
  import Goals_icon from "$lib/components/icons/Goals_icon.svelte";
  import Leaderboards_icon from "$lib/components/icons/Leaderboards_icon.svelte";

  let btns = [
    "Customer relationship management",
    "client management system",
    "business intelligence & feature specific reporting",
    "billing & processing",
    "point of sale systems",
    "fitness platform",
    "marketing cloud capabilities",
    "mass communications & automizations",
    "open api and endless 3rd party integrations",
    "client portal accessibility",
    "employee and team tracking",
    ,
  ];

  let btns2 = [
    "Intuitive fitness platform",
    "agreement customizer / builder",
    "gr bench marking",
    "gr nps scoring capability",
    "one-click payment processing",
    "customized pos center",
    "financial / p&l tracking / forecasting",
    "trend forecasting abilities",
    "machine learning  forecasting",
    "marketing cloud integration",
    "organizational documentation storage",
    "internal chat functionalities",
  ];

  //provided via shadow endpoint
  export let foo;
  btns.push(foo);
</script>

<section class="hero-sect">
  <Hero />
</section>

<div class="spreader-1" />

<section class="btn-matrix-1">
  <ButtonMatrix {btns} title="Key Features" showbg={true} />

  <h2>And so much more!</h2>
  <p>
    With One-click, be able to effortlessly <wbr />
    switch between CRM, CMS, Point-of-sale, <wbr />
    Business intelligence & data visualization, <wbr />
    employee tracking, company-wide leaderboards, HR & Payroll, Fitness Hub, Marketing
    cloud, Mass communications, agreement builders, automated lead & member journeys
    and so much more!
  </p>
</section>

<section class="wig-center reporting">
  <InfoPanel title="Widget Center" class="widget-panel">
    <Widget_center_icon slot="icon" />

    <picture>
      <source srcset="products/widget.png" media="(min-width: 1024px)" />
      <img class="widget-product" src="products/widget_m.png" alt="" />
    </picture>

    The widget center is your hub for customization<wbr />
    pertaining to your access to your account. Add / <wbr />
    remove and share specific widgets that are informative <wbr />
    to your business.
    <br />
    <br />
    Widgets are isolated by type and category and have <wbr />
    the ability to be as customized to your specific needs <wbr />
    and desires.
  </InfoPanel>

  <InfoPanel class="reporting-panel" title="Reporting">
    <Reporting_icon slot="icon" />
    <picture>
      <source srcset="products/reporting.png" media="(min-width: 1024px)" />
      <img class="reporting-product" src="products/reporting_m.png" alt="" />
    </picture>
    Live reporting gives you the opportunity to manage your business in real time
    to make adjustments before it is too late.
    <br />
    <br />
    Be able to pivot accordingly with our business intelligence section to allow
    you to maximize your time and financials.
    <br />
    <br />
    Static reporting, projections, KPI functionalities, RPM, forecasting capabilities
    and much more.
  </InfoPanel>
</section>

<section class="calender-masscom">
  <InfoPanel class="calendar-panel" title="Calendar" icon={callendar}>
    <Calendar_icon slot="icon" />
    <picture>
      <source srcset="products/calendar.png" media="(min-width: 1024px)" />
      <img class="calendar-product" src="products/calendar_m.png" alt="" />
    </picture>
    The calendar section is a key feature that is devoted to management of time-sensitive
    tasks, appointments, meetings, or any action that can be described as an "event"
    within your customizable experience. Users can create new events sorted into
    categories or tags, while other events derived from other Features generate automatically.
    <br />
    <br />
    Users can share their custom events with other users across any of their authorized
    teams within GymRevenue. Additionally, calendar events can trigger alerts and
    reminders either internally or via emails or text messages.
  </InfoPanel>

  <InfoPanel class="mass-com-panel" title="Mass Communications">
    <Mass_comm_icon slot="icon" />
    <picture>
      <source srcset="products/masscomm.png" media="(min-width: 1024px)" />
      <img class="masscomm-product" src="products/masscomm_m.png" alt="" />
    </picture>
    Our Mass Communications component is designed to cater to all forms of messaging.
    Whether you are speaking directly to an individual, featuring your best promotion
    to a specific or broader audience, or creating complex decision tree journeys
    to guide your prospects through your sales funnel. GymRevenue allows you to communicate
    your message without the miscommunication of 3rd party tools.
    <br />
    <br />
    From pre-made templates to allowing you the freedom to create your own specific
    template by specific needs, our mass communication sections gives the operators
    and owners the ability to do everything they need within one section to effectively
    manage expectations for communications with leads and members.
  </InfoPanel>
</section>

<section class="employeetrack-tasks">
  <InfoPanel class="emp-tracking" title="Employee Tracking">
    <Employee_tracking_icon slot="icon" />
    <picture>
      <source
        srcset="products/employee_tracking.png"
        media="(min-width: 1024px)"
      />
      <img
        class="employee_tracking-product"
        src="products/employee_tracking_m.png"
        alt=""
      />
    </picture>
    GymRevenue gives owners and operators the opportunity to manage in real time
    and effectively by their employees.
    <br />
    <br />
    Specifically filter between top performers and employees who need more training
    and development pertaining to specific areas in their role. point out these opportunities
    before it is too late.
    <br />
    <br />
    Leaderboards are based by employee type, location, category and even customizable
    items.
  </InfoPanel>

  <picture>
    <source srcset="woman.png" media="(min-width: 1024px)" />
    <img class="woman-divider" src="woman_m.png" alt="" />
  </picture>

  <picture>
    <source srcset="combg/reporting_bg.png" media="(min-width: 1024px" />
    <img class="shoddy-img-hack" src="combg/reporting_bg.png" alt="" />
  </picture>

  <InfoPanel class="task-panel" title="Tasks">
    <picture>
      <source srcset="products/tasks_1.png" media="(min-width: 1024px)" />
      <img class="tasks_1" src="products/tasks_1_m.png" alt="" />
    </picture>
    <picture>
      <source srcset="products/tasks_2.png" media="(min-width: 1024px)" />
      <img class="tasks_2" src="products/tasks_2.png" alt="" />
    </picture>
    <Tasks_icon slot="icon" />
    Customizable for your organization to maximize your business needs. Easily add
    automatic tasks to your employee's daily responsibilities and track the competition
    each item.
  </InfoPanel>
</section>

<section class="drip-leadmember">
  <InfoPanel class="drip-panel" title="Automated Drip Functionality">
    <Auto_drip_icon slot="icon" />

    <picture>
      <source srcset="products/calendar.png" media="(min-width: 1024px)" />
      <img class="drip-product" src="products/drip_m.png" alt="" />
    </picture>
    This feature enables clients to create dripp campaigns and configure their operation,
    such as linking it to an audience, linking SMS and email templates to them and
    deciding when and how often the communications should relay.
  </InfoPanel>

  <picture>
    <source srcset="combg/calendar_bg.png" media="(min-width: 1024px" />
    <img class="dripbg" src="combg/calendar_bg.png" alt="" />
  </picture>

  <InfoPanel class="lead-panel" title="Lead and Member Management">
    <Leads_members_icon slot="icon" />
    <picture>
      <source srcset="products/lead.png" media="(min-width: 1024px)" />
      <img class="lead-product" src="products/lead_m.png" alt="" />
    </picture>

    The lead and member sourcing is a suite of independent but key features that
    log and keep track of an interested customer/consumer and their journey from
    interested party to paying member.
  </InfoPanel>

  <picture>
    <source srcset="combg/employee_bg.png" media="(min-width: 1024px" />
    <img class="employbg" src="combg/employee_bg.png" alt="" />
  </picture>
</section>

<section class="goals-leaderboards">
  <InfoPanel class="goals-panel" title="Goals">
    <Goals_icon slot="icon" />
    <picture>
      <source srcset="products/goals.png" media="(min-width: 1024px)" />
      <img class="goals-product" src="products/goals_m.png" alt="" />
    </picture>
    For owners & operators, goal setting has forever been a long tedious pain-point
    within their walls that takes priceless time away from their teams. GR introduces
    an effective, easy and monumental way to set goals. As easy as it is to set one,
    it is just as easy to set 500 locations.
    <br />
    <br />
    Adjust goals manually, rolling averages, or business applied rules to automatically
    set your clubs performance goals to effortlessly review and send out through
    the system.
  </InfoPanel>

  <InfoPanel class="leaderboard-panel" title="Leaderboards">
    <Leaderboards_icon slot="icon" />
    <picture>
      <source srcset="products/leaderboard.png" media="(min-width: 1024px)" />
      <img
        class="leaderboard-product"
        src="products/leaderboard_m.png"
        alt=""
      />
    </picture>
    Leaderboards are customizable based on what is important to focus on. Easily
    change categories on a monthly basis to drive specific categories of the business.
    <br />
    <br />
    Track the top and bottom employees with ease. Allowing you the opportunity as
    an operator to focus on areas of need with employees that might need some extra
    attention with their training and development needs.
    <br />
    <br />
    In addition, see where your location ranks within your organization.
  </InfoPanel>
</section>

<section class="demo">
  <Demo />
</section>

<section class="btn-matrix-2">
  <ButtonMatrix btns={btns2} title="Coming Soon..." showbg={false} />
  <h3>And MUCH More...</h3>
</section>

<section class="beforefooter">
  <picture>
    <source srcset="before_footer.png" media="(max-width: 1024px)" />
    <img src="before_footer_m.png" alt />
  </picture>
</section>

<style>
  /* HERO SECTION */
  section.hero-sect {
    @apply flex flex-col bg-bottom bg-cover justify-end lg:justify-center min-h-screen bg-[#000616];
    background-image: url("/combg/hero_bg.png");
    background-attachment: local;
    background-blend-mode: lighten;
  }

  /* GRADIENT OVERLAY BETWEEN SECTIONS 1 & 2 */
  div.spreader-1 {
    @apply absolute h-40 w-full lg:hidden;
    transform: translate(0, -5rem);
    background: linear-gradient(#000209, #000616);
  }

  /* BUTTON MATRIX SECTION */
  section.btn-matrix-1 {
    @apply pt-4 lg:bg-top;
    background-color: #000616;
    background-image: url("/combg/matrix1_bg.png");

    h2 {
      @apply text-[2rem] font-bold text-center mt-4;
    }

    p {
      @apply text-center px-10 mt-4 lg:max-w-[45rem] lg:mx-auto lg:py-16;
    }
  }

  /* WIDGET SECTION */
  section.wig-center {
    @apply pt-80 ml-4 mr-auto relative z-[5] bg-no-repeat bg-bottom;

    img.widget-product {
      @apply absolute max-w-[40rem] lg:max-w-[80rem] h-auto translate-x-[-10rem] translate-y-[-29rem];
      @apply lg:right-0 lg:translate-x-[62rem] lg:translate-y-[-28rem];
    }

    @media (min-width: 1024px) {
      background-image: url("/combg/reporting_bg.png");
    }
  }

  /* GLOBAL WIDGET (sub components) */
  :global(article.widget-panel) {
    @apply max-w-[20rem] lg:max-w-[40rem] lg:pr-[20rem];
  }

  /* GLOBAL REPORTING PANEL (sub components) */
  :global(article.reporting-panel) {
    @apply mt-96 lg:mt-[40rem] mr-4 ml-auto max-w-[22rem] lg:max-w-[28rem];

    img.reporting-product {
      @apply absolute z-[-1] max-w-[40rem] lg:max-w-[50rem] h-auto translate-x-[-4rem] translate-y-[-27.5rem];
      @apply lg:translate-x-[-34rem] lg:translate-y-[-30rem] lg:left-0;
    }

    p {
      @apply relative lg:relative;
    }
  }

  /* CALENDAR & MASS COMMUNICATIONS  */
  section.calender-masscom {
    @apply pt-[20rem] lg:pb-96;
    background-image: url("/combg/calendar_bg.png"),
      url("/combg/reporting_bg.png");
    background-repeat: no-repeat;
    background-position: top center, bottom center;
  }

  /* GLOBAL CALENDAR  */
  :global(article.calendar-panel) {
    @apply max-w-[26rem] lg:max-w-[28rem] lg:ml-[4rem] relative ml-4 mr-auto;

    img.calendar-product {
      @apply absolute h-auto max-w-[40rem] lg:max-w-[65rem] top-0 -translate-y-64 -translate-x-32;
      @apply lg:translate-x-[10rem] lg:translate-y-[0];
    }
  }

  /* GLOBAL MASS COMMUNICATIONS */
  :global(article.mass-com-panel) {
    @apply max-w-[26rem] lg:max-w-[30rem] mt-96 relative mr-4 ml-auto;

    img.masscomm-product {
      @apply absolute h-auto max-w-[40rem] top-0 translate-x-[4rem] translate-y-[-20rem];
      @apply lg:max-w-[60rem] lg:right-0 lg:translate-x-[-18rem] lg:mt-36;
    }
  }

  /* EMPLOYEE TRACKING & TASKS */
  section.employeetrack-tasks {
    @apply pt-72 bg-no-repeat;
    background-image: url("combg/employee_bg.png");
    background-position-y: 30rem;

    img.employee_tracking-product {
      @apply absolute h-auto max-w-[40rem] lg:max-w-[80rem] lg:left-0 top-0;
      @apply translate-x-[-5rem] translate-y-[-21rem] lg:translate-x-[14rem] lg:translate-y-[-32rem];
    }
  }

  img.tasks_1 {
    @apply absolute h-auto max-w-[40rem] top-0 z-[1];
    @apply translate-x-[5rem] translate-y-[-5rem] lg:translate-x-[-25rem] lg:translate-y-[18rem];
  }

  img.tasks_2 {
    @apply absolute h-auto max-w-[20rem] top-0 translate-x-0 translate-y-[-18rem];
    @apply lg:translate-x-[-40rem] lg:translate-y-[0rem] lg:max-w-[60rem];
  }

  img.shoddy-img-hack {
    @apply absolute object-none max-w-[200rem] translate-x-[-80rem] translate-y-[-10rem] w-[300rem] rotate-180;
  }

  /* GLOBAL EMPLOYEE TRACKING */
  :global(article.emp-tracking) {
    @apply relative max-w-[22rem] lg:max-w-[40rem] ml-4 lg:pr-[12rem];
    p {
      @apply relative font-bold;
    }
  }

  /* woman divider between employee tracking & tasks */
  img.woman-divider {
    @apply mb-96 mt-48 mx-auto lg:max-w-[60rem] lg:mt-[25rem];
  }

  /* GLOBAL TASKS */
  :global(article.task-panel) {
    @apply relative max-w-[22rem] mr-auto ml-4 lg:ml-auto lg:mr-[5rem];
  }

  /* AUTOMATED DRIP & MEMBER MANAGEMENT */
  section.drip-leadmember {
    @apply py-64 lg:pt-[80rem] lg:min-h-[300vh];

    img.dripbg {
      @apply absolute object-contain max-w-[150rem] w-[300rem] max-h-[80rem] rotate-[4deg] scale-x-[1] translate-x-[-40rem] translate-y-[-30rem];
    }

    img.drip-product {
      @apply absolute h-auto max-w-[40rem] lg:max-w-[80rem] top-0;
      @apply translate-x-[-10rem] translate-y-[26rem];
      @apply lg:translate-x-[10rem] lg:translate-y-[-25rem];
    }

    img.lead-product {
      @apply absolute h-auto max-w-[50rem] lg:max-w-[90rem] scale-110 top-0 translate-x-[-20rem] translate-y-[-20rem];
      @apply lg:translate-x-[-80rem] lg:translate-y-[-20rem] z-[1];
    }

    img.employbg {
      @apply absolute object-cover max-w-[100rem];
    }
  }

  /* GLOBAL DRIP */
  :global(article.drip-panel) {
    @apply relative max-w-[22rem] ml-auto mr-4 lg:ml-[5rem] lg:pb-[5rem] lg:max-w-[50rem] lg:pr-[12rem];
    @apply z-[8];

    p {
      @apply relative;
    }
  }

  /* GLOBAL LEAD */
  :global(article.lead-panel) {
    @apply relative max-w-[22rem] lg:max-w-[30rem] mt-64 pt-16 ml-4 mr-auto lg:mt-[60rem];
    @apply lg:mr-12 lg:ml-auto;
  }

  :global(article.goals-panel) {
    @apply relative max-w-[24rem] lg:max-w-[30rem] lg:pr-20 pt-16 mr-4 ml-auto lg:mx-auto lg:ml-[5rem];
  }

  section.goals-leaderboards {
    @apply lg:pt-[30rem] bg-no-repeat bg-left;
    background-image: url("combg/calendar_bg.png");
    background-attachment: local;
    background-size: 130% 50%;
    background-position-x: center;
    background-position-y: left;

    img.goals-product {
      @apply absolute h-auto max-w-[40rem] lg:max-w-[80rem] top-0 translate-y-[-15rem] translate-x-0;
      @apply lg:translate-x-[12rem] lg:translate-y-[-20rem];
    }

    img.leaderboard-product {
      @apply absolute h-auto max-w-[40rem] top-0 lg:max-w-[80rem] translate-x-[-18rem] translate-y-[-22rem];
      @apply lg:translate-x-[-75rem] lg:translate-y-[-30rem];
    }
  }

  :global(article.leaderboard-panel) {
    @apply relative max-w-[22rem] mt-64 mb-28 ml-4 mr-auto lg:max-w-[26rem] lg:mr-[3rem] lg:ml-auto;
  }

  section.btn-matrix-2 {
    h3 {
      @apply mt-8 text-center font-bold;
    }
  }

  /* LAST SECTION */
  section.beforefooter {
    @apply max-h-min min-h-screen py-24;

    img {
      @apply lg:w-[40rem] mx-auto;
    }
  }
</style>
