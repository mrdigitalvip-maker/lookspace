# Architecture

Este documento descreve a arquitetura modular do LookSpace. O projeto é organizado por módulos no diretório `src/modules`, cada um contendo `components`, `hooks`, `services` e `types`.

- Módulos são isolados; apenas `@services` expõe integrações externas.
- UI é composta por componentes puros em `src/components`.
- A infraestrutura Supabase fica em `src/lib/supabase`.
