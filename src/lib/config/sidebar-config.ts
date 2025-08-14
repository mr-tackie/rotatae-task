export interface SidebarItem {
    id: string
    label: string
    icon: string
    isActive?: boolean
  }
  
  export const sidebarItems: SidebarItem[] = [
    { id: '1', label: 'Lorem', icon: 'grid' },
    { id: '2', label: 'Lorem', icon: 'alert-triangle'},
    { id: '3', label: 'Lorem', icon: 'folder' },
    { id: '4', label: 'Lorem', icon: 'star', isActive: true },
    { id: '5', label: 'Lorem', icon: 'settings' },
    { id: '6', label: 'Lorem', icon: 'file' },
    { id: '7', label: 'Lorem', icon: 'hash' },
    { id: '8', label: 'Lorem', icon: 'settings' },
    { id: '9', label: 'Lorem', icon: 'folder' }
  ]