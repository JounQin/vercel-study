import { Session } from 'next-auth/client';

export interface PageProps {
  session: Session | null
}
