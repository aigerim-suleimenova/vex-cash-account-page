import type { ComponentPropsWithoutRef, ElementType, PropsWithChildren, ReactNode } from 'react'

/**
 * Mirrors react-bootstrap's `DynamicRefForwardingComponent` (from `@restart/ui/types`)
 * structurally, without adding that package as a dependency for one type: a component
 * that renders as `TInitial` by default but accepts an `as` prop to render as anything
 * else, forwarding its ref to whatever `as` resolves to.
 */
export interface DynamicRefForwardingComponent<TInitial extends ElementType, P = unknown> {
  <As extends ElementType = TInitial>(
    props: PropsWithChildren<P & { as?: As }> & Omit<ComponentPropsWithoutRef<As>, keyof P | 'as'>,
  ): ReactNode
  displayName?: string
}
