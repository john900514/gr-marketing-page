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
      <source srcset="products/drip.png" media="(min-width: 1024px)" />
      <img class="drip-product" src="products/drip_m.png" alt="" />
    </picture>
    This feature enables clients to create dripp campaigns and configure their operation,
    such as linking it to an audience, linking SMS and email templates to them and
    deciding when and how often the communications should relay.
  </InfoPanel>

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
    @apply flex flex-col bg-bottom bg-cover justify-end min-h-screen;
    background-image: url("/combg/hero_bg.png");
    background-attachment: local;
  }

  /* GRADIENT OVERLAY BETWEEN SECTIONS 1 & 2 */
  div.spreader-1 {
    @apply absolute h-40 w-full;
    transform: translate(0, -5rem);
    background: linear-gradient(#000209, #000616);
  }

  /* BUTTON MATRIX SECTION */
  section.btn-matrix-1 {
    @apply pt-4;

    h2 {
      @apply text-[2rem] font-bold text-center mt-4;
    }

    p {
      @apply text-center px-10 mt-4;
    }
  }

  /* WIDGET SECTION */
  section.wig-center {
    @apply pt-80 ml-4 relative z-[5];

    img.widget-product {
      @apply absolute max-w-[40rem] h-auto;
      transform: translate(-10rem, -29rem);
    }
  }

  /* GLOBAL WIDGET (sub components) */
  :global(article.widget-panel) {
    @apply max-w-[20rem];
  }

  /* GLOBAL REPORTING PANEL (sub components) */
  :global(article.reporting-panel) {
    @apply mt-96 mr-4 ml-auto max-w-[22rem];

    img.reporting-product {
      @apply absolute z-[-1] max-w-[40rem] h-auto;
      transform: translate(-4rem, -27.5rem);
    }
  }

  /* CALENDAR & MASS COMMUNICATIONS  */
  section.calender-masscom {
    @apply pt-[20rem];
  }

  /* GLOBAL CALENDAR  */
  :global(article.calendar-panel) {
    @apply max-w-[26rem] relative;

    img.calendar-product {
      @apply absolute h-auto max-w-[40rem] top-0 -translate-y-64 -translate-x-32;
    }
  }

  /* GLOBAL MASS COMMUNICATIONS */
  :global(article.mass-com-panel) {
    @apply max-w-[26rem] mt-96 relative;

    img.masscomm-product {
      @apply absolute h-auto max-w-[40rem] top-0;
      transform: translate(4rem, -20rem);
    }
  }

  /* EMPLOYEE TRACKING & TASKS */
  section.employeetrack-tasks {
    @apply pt-72;

    img.employee_tracking-product {
      @apply absolute h-auto max-w-[40rem] top-0;
      transform: translate(-5rem, -21rem);
    }
  }

  img.tasks_1 {
    @apply absolute h-auto max-w-[40rem] top-0 z-[1];
    transform: translate(5rem, -5rem);
  }

  img.tasks_2 {
    @apply absolute h-auto max-w-[20rem] top-0;
    transform: translate(0rem, -18rem);
  }

  /* GLOBAL EMPLOYEE TRACKING */
  :global(article.emp-tracking) {
    @apply relative max-w-[22rem] ml-4;
    p {
      @apply relative font-bold;
    }
  }

  /* woman divider between employee tracking & tasks */
  img.woman-divider {
    @apply mb-96 mt-48;
    transform: translate(0.8rem);
  }

  /* GLOBAL TASKS */
  :global(article.task-panel) {
    @apply relative max-w-[22rem];
  }

  /* AUTOMATED DRIP & MEMBER MANAGEMENT */
  section.drip-leadmember {
    @apply py-64;

    img.drip-product {
      @apply absolute h-auto max-w-[40rem] top-0;
      transform: translate(-10rem, -16rem);
    }

    img.lead-product {
      @apply absolute h-auto max-w-[50rem] scale-110 top-0;
      transform: translate(-20rem, -20rem);
    }
  }

  /* GLOBAL DRIP */
  :global(article.drip-panel) {
    @apply relative max-w-[22rem];
  }

  /* GLOBAL LEAD */
  :global(article.lead-panel) {
    @apply relative max-w-[22rem] mt-64 pt-16;
  }

  :global(article.goals-panel) {
    @apply relative max-w-[24rem] pt-16 mr-4 ml-auto;
  }

  section.goals-leaderboards {
    img.goals-product {
      @apply absolute h-auto max-w-[40rem] top-0;
      transform: translate(0rem, -15rem);
    }

    img.leaderboard-product {
      @apply absolute h-auto max-w-[40rem] top-0;
      transform: translate(-18rem, -22rem);
    }
  }

  :global(article.leaderboard-panel) {
    @apply relative max-w-[22rem] mt-64 mb-28;
  }

  section.btn-matrix-2 {
    h3 {
      @apply mt-8 text-center font-bold;
    }
  }

  /* LAST SECTION */
  section.beforefooter {
    @apply max-h-min min-h-screen py-24;
  }
</style>
