<?php
libxml_use_internal_errors(true);
$doc = new DOMDocument();
if (!$doc->loadHTMLFile('attractions.html')) {
    echo "Couldn't load the file";
} else {
    $links = $doc->getElementsByTagName('a');
    foreach ($links as $link) {
        $href = $link->getAttribute('href');
        if (strpos($href, 'http') === 0) {
            $linktext = $link->textContent;
            echo "$href link text: $linktext<br>";
        }
    }
}
