<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>@yield('title', 'Laravel News')</title>

    @viteReactRefresh
    @vite('resources/js/app.jsx')
</head>
<body>

    <main>
        @yield('content')
    </main>

</body>
</html>
