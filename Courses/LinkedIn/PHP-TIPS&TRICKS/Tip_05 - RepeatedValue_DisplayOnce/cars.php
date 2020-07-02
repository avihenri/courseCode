<html>
    <body>
    <h1>Display Repeating Value Once</h1>

    <table>
        <tr>
            <th>Make</th>
            <th>Price</th>
            <th>Description</th>
        </tr>
        <?php
        $previous = '';
        foreach ($db->query($cars) as $row) { ?>
            <tr>
                <?php if ($previous == $row['make']) {
                    echo '<td>$nbsp;</td>';
                } else { ?>
                    <td><?= $row['make']; ?></td>
                <?php } ?>
                <td><?= $row['priceF']; ?></td>
                <td><?= $row['description']; ?></td>
            </tr>

        <?php 
        $previous = $row['make'];
        } ?>
    </table>
    </body>
</html>

<!-- REVIEW -->