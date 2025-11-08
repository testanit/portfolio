export interface EventItem {
  status?: string;
  date?: string;
  company?: string;
  icon?: string;
  color?: string;
  image?: string;
  details?: string[];
}

// Export WorkItem so other components can import it (alias of EventItem)
export type WorkItem = EventItem;
