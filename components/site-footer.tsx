export async function SiteFooter() {
  "use cache";

  return (
    <footer className="border-t border-foreground/10">
      <div className="mx-auto w-full max-w-5xl px-4 py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} PetAmigo. Todos os direitos reservados.
      </div>
    </footer>
  );
}
