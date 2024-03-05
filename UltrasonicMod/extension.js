({
    name: "MOD", // Category Name
    description: "Get distance from SR04M-2",
    author: "Nawa",
    category: "Sensors",
    version: "1.0.0",
    icon: "/static/icon.png", // Category icon
    color: "#980019", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
    {
        xml: '<label text="Distance sensor SR04M-2"></label>',
    },
        {
            xml: `
                <block type="ultrasonic_read">
                    <field name="Tx">32</field>
                </block>
            `
        },
        {
            xml: '<label text="GPS"></label>',
        },
        {
            xml: `
                <block type="gps_setup">
                    <value name="pin">
                        <shadow type="math_number">
                            <field name="NUM">8</field>
                        </shadow>
                    </value>
                </block>
                `
            },
            "gps_is_ready",
            "gps_position",
            "gps_speed",
            {
                xml: `
                    <block type="gps_distance">
                        <value name="lat1">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="lng1">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="lat2">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="lng2">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                    </block>
                `
            },
            {
                xml: '<label text="UTC datetime"></label>',
            },
            "gps_get_hour",
            "gps_get_min",
            "gps_get_sec",
            "gps_get_day",
            "gps_get_month",
            "gps_get_year"
    ],    supportArduinoPlatform: true,
    depends: [ // Arduino library
        "TinyGPS@13.0.0"
    ]
});
