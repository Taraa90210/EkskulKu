import { ekskul, pendaftar } from "./ekskul";

function jeda(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

export async function AmbilSemuaEkskul() {
  await jeda(1000);
  return ekskul;
}

export async function ambilEksul(id: number) {
  await jeda(500);
  return ekskul.find((e) => e.id === id);
}

export async function ambilAnggota(ekskulId: number) {
  await jeda(1500);
  return pendaftar
    .filter((p) => p.ekskulId === ekskulId)
    .sort((a, b) => a.nomor - b.nomor);
}
