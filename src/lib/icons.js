import Widget_center_icon from "$lib/components/icons/Widget_center_icon.svelte";
import Reporting_icon from "$lib/components/icons/Reporting_icon.svelte";
import Calendar_icon from "$lib/components/icons/Calendar_icon.svelte";
import Mass_comm_icon from "$lib/components/icons/Mass_comm_icon.svelte";
import Employee_tracking_icon from "$lib/components/icons/Employee_tracking_icon.svelte";
import Tasks_icon from "$lib/components/icons/Tasks_icon.svelte";
import Auto_drip_icon from "$lib/components/icons/Auto_drip_icon.svelte";
import Leads_members_icon from "$lib/components/icons/Leads_members_icon.svelte";
import Goals_icon from "$lib/components/icons/Goals_icon.svelte";
import Leaderboards_icon from "$lib/components/icons/Leaderboards_icon.svelte";

export const iconList = [
  { index: 0, name: "widget center", icon: Widget_center_icon, id: "#Widget Center" },
  { index: 1, name: "reporting", icon: Reporting_icon, id: "#Reporting" },
  { index: 2, name: "calendar", icon: Calendar_icon, id: "#Calendar" },
  {
    index: 3,
    name: "mass communication",
    icon: Mass_comm_icon,
    id: "#Mass Communications",
  },
  {
    index: 4,
    name: "employee tracking",
    icon: Employee_tracking_icon,
    id: "#Employee Tracking",
  },
  { index: 5, name: "tasks", icon: Tasks_icon, id: "#Tasks" },
  {
    index: 6,
    name: "auto drip",
    icon: Auto_drip_icon,
    id: "#Automated Drip Functionality",
  },
  {
    index: 7,
    name: "leads/members",
    icon: Leads_members_icon,
    id: "#Lead and Member Management",
  },
  { index: 8, name: "goals", icon: Goals_icon, id: "#Goals" },
  { index: 9, name: "leaderboards", icon: Leaderboards_icon, id: "#Leaderboards" },
];
