import { LOCALES } from "./consts";

interface LocalePath<Params extends Record<string, string>, Props> {
  params: Params;
  props?: Props;
}

export function withLocales<Params extends Record<string, string> = Record<string, never>, Props = undefined>(
  paths: LocalePath<Params, Props>[] = [{ params: {} as Params }],
) {
  return LOCALES.flatMap((locale) =>
    paths.map(({ params, props }) => ({
      params: { locale, ...params },
      props,
    })),
  );
}
