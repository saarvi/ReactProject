<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    /**
     * @Route("/{reactRouting}", name="home", requirements={"reactRouting"="^(?!api).+"}, defaults={"reactRouting": null})
     * @return Response
     */
    public function home()
    {
        return $this->render('pages/home.html');
    }
}
