<?php

if (!function_exists('render')) {
    /**
     * Alias function to Response using Inertia or Blade
     * Driver
     * @param $view
     * @param array $data
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View|\Inertia\Response
     */
    function render($view = null, array $data = [])
    {
        $driver = 'inertia'; //blade

        return match ($driver) {
            'inertia' => \Inertia\Inertia::render($view, $data),
            default => view($view, $data)
        };
    }
}
