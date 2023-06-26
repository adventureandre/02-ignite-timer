import { Index } from '../../components/Header'
import { Outlet } from 'react-router-dom'
import { LayoutConteiner } from './styles.ts'

export function DefaultLayout() {
  return (
    <LayoutConteiner>
      <Index />
      <Outlet />
    </LayoutConteiner>
  )
}
